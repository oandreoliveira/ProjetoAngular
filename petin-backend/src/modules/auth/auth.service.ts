import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { cpf } from 'cpf-cnpj-validator';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService, private usuario: UsuarioService, private jwtService: JwtService) {}
 
    async validarUsuario(data: string, senha: string){
        const cpfValido = cpf.isValid(data)

        if (!cpfValido) {
          throw new HttpException("CPF Inválido!", HttpStatus.BAD_REQUEST)
        }

        const user = await this.usuario.buscarUsuarioPorCPF(data);
        const senhaValida = await compare(senha, user.senha);

        if (!senhaValida) {
            throw new HttpException("Usuário ou senha inválida", HttpStatus.UNAUTHORIZED);
        }

        if (user) {
            const { id, cpf, isCliente, id_cliente } = user;
            return { id, cpf, isCliente, id_cliente }; 

        } 

        return null;
    }

    async login(user: any) {
        const payload = { cpf: user.cpf, sub: user.id };
        return {

            access_token: this.jwtService.sign(payload),
            data: user,
        }
    }
}
