import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { UsuarioDTO } from './usuario.dto';
import { hash } from 'bcryptjs';
import { cpf } from 'cpf-cnpj-validator';

@Injectable()
export class UsuarioService {

    constructor(private prisma: PrismaService) {}

    async cadastrarUsuario(data: UsuarioDTO){
        const cpfValido = cpf.isValid(data.cpf)

        if (!cpfValido) {
            throw new HttpException("CPF Inválido!", HttpStatus.BAD_REQUEST)
        }

        const usuario = await this.prisma.usuario.findUnique({
            where: {
                cpf: data.cpf
            }
        })

        if (usuario) {
            throw new HttpException("Usuário já cadastrado", HttpStatus.CONFLICT)
        }

        const senhaHash = await hash(data.senha, 8);

        const retorno = await this.prisma.usuario.create({
            data: {
                cpf: data.cpf,
                senha: senhaHash,
                id_cliente: data.id_cliente,
            }
        });
        const userCpf = retorno.cpf;
        const { id, id_cliente, isCliente } = retorno;

        return {userCpf, id, id_cliente, isCliente};
    }

    async buscarUsuarioPorCPF(data: string){
        const cpfValido = cpf.isValid(data)

        if (!cpfValido) {
            throw new HttpException("CPF Inválido!", HttpStatus.BAD_REQUEST)
        }

        const usuario = await this.prisma.usuario.findUnique({
            where: {
                cpf: data
            }
        })

        if (!usuario) {
            throw new HttpException("Usuário não encontrado!", HttpStatus.NOT_FOUND);
        }

        return usuario;
    }

    async buscarUsuarioPorId(id: string){
        const user = await this.prisma.usuario.findUnique({
            where: {
                id
            }
        })

        if (!user) {
            throw new HttpException("Usuário não encontrado!", HttpStatus.NOT_FOUND);
        }

        return user;
    }
}
