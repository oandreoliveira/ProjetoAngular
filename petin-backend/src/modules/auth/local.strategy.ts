import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    
    constructor(private authService: AuthService) {
        super({
            usernameField: 'cpf',
            passwordField: 'senha'
        });
    }

    async validate(cpf: string, senha: string): Promise<any> {
        const user = await this.authService.validarUsuario(cpf, senha);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}