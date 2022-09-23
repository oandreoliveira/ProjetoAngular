import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ClienteDTO {
  id?: string;

  @IsNotEmpty()
  @ApiProperty({
    name: "nome",
    description: "O campo se refere ao nome do cliente",
    example: "João da Silva"
  })
  nome: string;

  @IsNotEmpty()
  @ApiProperty({
    name: "cpf",
    description: "O campo se refere ao CPF do cliente",
    example: "03113871018"
  })
  cpf: string;
  isAtivo?: boolean;
};
