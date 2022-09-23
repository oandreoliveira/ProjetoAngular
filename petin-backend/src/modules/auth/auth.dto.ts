import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from 'class-validator';
export class AuthDTO {
    @IsNotEmpty()
    @ApiProperty({
        name: "cpf",
        description: "O usuário deve usar do seu CPF para realizar Login",
        example: "81054796050"
    })
    cpf: string;

    @IsNotEmpty()
    @ApiProperty({
        name: "senha",
        description: "O usuário deve informar sua senha para realizar Login",
        example: "1234"
    })
    senha: string;
}