import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class EstabelecimentoDTO {
  id?: string;

  @IsNotEmpty()
  @ApiProperty({
    name: "Nome",
    description: "Deve ser inserido o nome do Estabelecimento.",
    example: "Shopping Riomar",
  })
  nome: string;

  @IsNotEmpty()
  @ApiProperty({
    name: "CNPJ",
    description: "Deve ser informado o CNPJ do Estabelecimento.",
    example: "45631065000173",
  })
  cnpj: string;

  @IsNotEmpty()
  @ApiProperty({
    name: "Descrição",
    description: "Deve ser informado uma descrição do Estabelecimento.",
    example: "As lojas de construção da rede permitem a entrada de pets de pequeno e médio porte e disponibilizam até um suporte que pode ser acoplado ao carrinho de compras. Esse aparelho não tem custo nenhum para os clientes e pode ser usado durante a permanência na loja."
  })
  descricao: string;

  @IsNotEmpty()
  @ApiProperty({
    name: "Endereço",
    description: "Deve ser inserido o endereço do Estabelecimento.",
    example: "Rua A, 111, Centro, Recife-PE, 50010-000"
  })
  endereco: string;

  @IsNotEmpty()
  @ApiProperty({
    name: "Telefone",
    description: "Deve-se inserir o telefone de contato do Estabelecimento.",
    example: "81-30041202",
  })
  telefone: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    name: "Email",
    description: "Deve ser informado nesse campo o email de contato do Estabelecimento.",
    example: "email@email.com",
  })
  email: string;

  @ApiProperty({
    name: "Imagem",
    description: "Deve-se inserir a URL da imagem do seu Estabelecimento.",
    example: "https://upload.wikimedia.org/wikipedia/en/8/87/Keyboard_cat.jpg",
  })
  imagem: string;

  isAtivo?: boolean;

  @ApiProperty({
    name: "id_categoria",
    description: "Deve-se informar o ID da Categoria para que seja feito o relacionamento.",
    example: "2b7bb50d-2b53-469c-8ff7-8b457f794b41",
  })
  id_categoria: string;

  @ApiProperty({
    name: "id_cliente",
    description: "Deve-se informar o ID do Estabelecimento para que seja feito o relacionamento.",
    example: "dd08477c-0680-48e9-a311-d8a44c0d6b8a",
  })
  id_cliente: string;
}
