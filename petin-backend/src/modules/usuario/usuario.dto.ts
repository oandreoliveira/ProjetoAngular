import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class UsuarioDTO {
    id?: string;

    @IsNotEmpty()
    @ApiProperty({
        name: "cpf",
        description: "Deve ser informado o seu CPF para que seja criada uma conta.",
        example: "76858812091",
    })
    cpf: string;

    @IsNotEmpty()
    @ApiProperty({
        name: "senha",
        description: "Deve ser informada a senha para criação da conta.",
        example: "1234"
    })
    senha: string;

    @IsNotEmpty()
    @ApiProperty({
        name: "id_cliente",
        description: "Deve ser informado o cliente para associar com usuário em questão",
        example: "ed1339f9-b563-40d8-8d55-054da3c33219"
    })
    id_cliente: string;
    
    isCliente?: boolean;
    isAtivo?: boolean;
}