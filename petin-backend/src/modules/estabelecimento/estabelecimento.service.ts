import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { PrismaService } from '../../database/PrismaService';
import { EstabelecimentoDTO } from './estabelecimento.dto';
import { cnpj } from 'cpf-cnpj-validator';

@Injectable()
export class EstabelecimentoService {
  constructor(private prismaService: PrismaService) {}

  private async buscarEstabelecimentoPorCnpj(data: string){
    const cnpjValido = cnpj.isValid(data);

    if (!cnpjValido) {
      throw new HttpException("CNPJ Inválido!", HttpStatus.BAD_REQUEST);
    }

    return this.prismaService.estabelecimento.findFirst({
      where: {
        cnpj: data
      }
    }) 
  }

  async criarEstabelecimento(data: EstabelecimentoDTO) {
    const cnpjValido = cnpj.isValid(data.cnpj);

    if (!cnpjValido) {
      throw new HttpException("CNPJ Inválido!", HttpStatus.BAD_REQUEST);
    }

    const estabelecimento = await this.buscarEstabelecimentoPorCnpj(data.cnpj);

    if (estabelecimento && !estabelecimento.isAtivo){
      return this.prismaService.estabelecimento.update({
        where: {
          id: estabelecimento.id
        }, data: {
          isAtivo: true
        }
      })
    } else if (estabelecimento && estabelecimento.isAtivo){
      throw new HttpException("CNPJ já cadastrado!", HttpStatus.CONFLICT)
    }

    return this.prismaService.estabelecimento.create({
      data
    })
  }

  async buscarTodosOsEstabelecimentos() {
    return this.prismaService.estabelecimento.findMany({
      where: {
        isAtivo: true
      }
    })
  }

  async buscarEstabelecimentoPorId(id: string) {
    const estabelecimento = this.prismaService.estabelecimento.findFirst({
      where: {
        id,
        AND: {
          isAtivo: true
        }
      }
    })

    if (estabelecimento) return estabelecimento;

    throw new HttpException("Estabelecimento não encontrado!", HttpStatus.NOT_FOUND);
  }

  async alterarEstabelecimento(id: string, data: EstabelecimentoDTO) {
    const cnpjValido = cnpj.isValid(data.cnpj);

    if (!cnpjValido) {
      throw new HttpException("CNPJ Inválido!", HttpStatus.BAD_REQUEST);
    }

    const estabelecimento = await this.buscarEstabelecimentoPorId(id);
    if (estabelecimento) {
      return this.prismaService.estabelecimento.update({
        where: {
          id
        },
        data
      })
    }
  }

  async deletarEstabelecimento(id: string) {
    const estabelecimento = await this.buscarEstabelecimentoPorId(id);

    if (estabelecimento) {
      return this.prismaService.estabelecimento.update({
        where: {
          id
        },
        data: {
          isAtivo: false
        }
      })
    }
  }
}
