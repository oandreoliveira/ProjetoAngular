import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CategoriaDTO {
  id?: string;

  @IsNotEmpty()
  @ApiProperty({
    name: "nome",
    description: "Deve ser inserido o nome da Categoria do Estabelecimento",
    example: "Restaurante",
  })
  nome: string;

  isAtivo?: boolean;
};
