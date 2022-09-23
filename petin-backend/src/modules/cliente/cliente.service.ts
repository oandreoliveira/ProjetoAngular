import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { ClienteDTO } from './cliente.dto';
import { cpf } from 'cpf-cnpj-validator';


@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) { }

  private async buscarClientePorCpf(data: string) {
    const cpfValido = cpf.isValid(data)

    if (!cpfValido) {
      throw new HttpException("CPF Inválido!", HttpStatus.BAD_REQUEST)
    }

    return this.prisma.cliente.findFirst({
      where: {
        cpf: data
      },
    });
  }

  async criar(data: ClienteDTO) {
    const cpfValido = cpf.isValid(data.cpf)

    if (!cpfValido) {
      throw new HttpException("CPF Inválido!", HttpStatus.BAD_REQUEST)
    }

    const cliente = await this.buscarClientePorCpf(data.cpf);

    if (cliente && !cliente.isAtivo) {
      return this.prisma.cliente.update({
        where: {
          id: cliente.id,
        },
        data: {
          isAtivo: true,
        },
      });
    } else if (cliente && cliente.isAtivo) {
      throw new HttpException('CPF já cadastrado!', HttpStatus.CONFLICT);
    }

    return await this.prisma.cliente.create({
      data,
    });
  }

  async listarTodosClientes() {
    return this.prisma.cliente.findMany({
      where: {
        isAtivo: true,
      }, include: {
        Estabelecimento: {
          where: {
            isAtivo: true
          },
          select: {
            id: true,
            nome: true,
            cnpj: true,
            categoria: {
              select: {
                nome: true
              }
            },
            descricao: true,
            email: true,
            endereco: true,
            imagem: true,
            telefone: true,

          }
        }
      }
    });
  }

  async buscarClientePorID(id: string) {
    const cliente = await this.prisma.cliente.findFirst({
      where: {
        id,
        AND: {
          isAtivo: true,
        },
      }, include: {
        Estabelecimento: {
          where: {
            isAtivo: true
          },
          select: {
            id: true,
            nome: true,
            cnpj: true,
            categoria: {
              select: {
                nome: true
              }
            },
            descricao: true,
            email: true,
            endereco: true,
            imagem: true,
            telefone: true,
          }
        }
      }
    });

    if (cliente) {
      return cliente;
    }

    throw new HttpException('Cliente não encontrado!', HttpStatus.NOT_FOUND);
  }

  async alterarCliente(id: string, data: ClienteDTO) {
    const cpfValido = cpf.isValid(data.cpf)

    if (!cpfValido) {
      throw new HttpException("CPF Inválido!", HttpStatus.BAD_REQUEST)
    }

    const cliente = await this.buscarClientePorID(id);
    if (cliente) {
      return this.prisma.cliente.update({
        where: {
          id,
        },
        data,
      });
    }
  }

  async deletarCliente(id: string) {
    const cliente = await this.buscarClientePorID(id);
    if (cliente) {
      return this.prisma.cliente.update({
        where: {
          id,
        },
        data: {
          isAtivo: false,
        },
      });
    }
  }
}
