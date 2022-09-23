# Petin-Backend Project

## Descrição
API de gerenciamento de Estabelecimentos PetFriendly.
## Instalação

```bash
$ npm install
```

#### Configuração do Banco de Dados
Para Configurar um banco de Dados, basta ir no arquivo ``.env`` localizado na pasta ``petin-backend`` e informar suas credenciais do banco de Dados na String ``DATABASE_URL``. Deve substituir na String ``"mysql://root:root@localhost:3306/petin_project?schema=public"``, o primeiro root como seu usuário e o segundo root como sua senha do banco de dados.

## Executando o Aplicativo

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Modelo de Dados

![UML](/petin-project/petin-backend/docs/uml_projeto_petin.png)

## Documentação:
Ao executar a aplicação, acessar o [Swagger (OpenAPI)](http://localhost:3000/api)
## Endpoints Disponíveis

#### Cliente:

|Método|URL|Ação|
|--|--|--|
|GET|http://localhost:3000/cliente|Buscar todos os Clientes|
|POST|http://localhost:3000/cliente|Cadastrar Cliente|
|GET|http://localhost:3000/cliente/id|Buscar Cliente pelo ID|
|GET|http://localhost:3000/cliente/id/estabelecimento|Buscar estabelecimentos do cliente|
|PUT|http://localhost:3000/cliente/id|Alterar cadastro do Cliente|
|DELETE|http://localhost:3000/cliente/id|Excluir registro do Cliente|

O Método GET ALL deve retornar no corpo da response o seguinte:
```
{
  "id": "uuid-exemple",
  "nome": "cliente1",
  "cpf": "11111111111,
  "isAtivo": true
}
{
  "id": "uuid-exemple",
  "nome": "cliente2",
  "cpf": "22222222222,
  "isAtivo": true
}
```

O método POST deve retornar no corpo da response o seguinte:
```
{
  "id": "uuid-exemple",
  "nome": "cliente3",
  "cpf": "33333333333,
  "isAtivo": true
}
```
E deve ser enviado na request:
```
{
  "nome": "cliente3",
  "cpf": "33333333333,
}
```

O método GET deve retornar no corpo da response o seguinte:
```
{
  "id": "uuid-exemple",
  "nome": "cliente1",
  "cpf": "11111111111,
  "isAtivo": true
}
```

O método PUT deve retornar no corpo da response o seguinte:
```
{
  "id": "uuid-exemple",
  "nome": "cliente1",
  "cpf": "11111111111,
  "isAtivo": true
}
```

E deve ser enviado na request:
```
{
  "nome": "cliente3",
  "cpf": "33333333333,
}
```

O método DELETE não deve retornar nada na response.

#### Estabelecimento

|Método|URL|Ação|
|--|--|--|
|GET|http://localhost:3000/estabelecimento|Buscar todos os estabelecimentos|
|POST|http://localhost:3000/estabelecimento|Cadastrar estabelecimento|
|GET|http://localhost:3000/estabelecimento/id|Buscar estabelecimento pelo ID|
|PUT|http://localhost:3000/estabelecimento/id|Alterar cadastro do estabelecimento|
|DELETE|http://localhost:3000/estabelecimento/id|Excluir registro do estabelecimento|

O Método GET ALL deve retornar no corpo da response o seguinte:
```
{
  "id": "uuid-example",
  "nome": "estabelecimento1",
  "cnpj": "11111111000110,
  "descricao": "Restaurante Vegano"
  "endereco" : "Rua A, 100",
  "telefone": "99999999999",
  "email": "email@email.com",
  "imagem": "url-example"
  "id_cliente": "uuid-example",
  "id_categoria": "uuid-example",
  "isAtivo": true
},
{
  "id": "uuid-example",
  "nome": "estabelecimento1",
  "cnpj": "11111111000110,
  "descricao": "Restaurante Vegano"
  "endereco" : "Rua A, 100",
  "telefone": "99999999999",
  "email": "email@email.com",
  "imagem": "url-example"
  "id_cliente": "uuid-example",
  "id_categoria": "uuid-example",
  "isAtivo": true
}
```

O Método POST deve retornar no corpo da response o seguinte
```
{
  "id": "uuid-example",
  "nome": "estabelecimento1",
  "cnpj": "11111111000110,
  "descricao": "Restaurante Vegano"
  "endereco" : "Rua A, 100",
  "telefone": "99999999999",
  "email": "email@email.com",
  "imagem": "url-example"
  "id_cliente": "uuid-example",
  "id_categoria": "uuid-example",
  "isAtivo": true
}
```
E deve ser enviado na request:
```
{
  "nome": "estabelecimento1",
  "cnpj": "11111111000110,
  "descricao": "Restaurante Vegano"
  "endereco" : "Rua A, 100",
  "telefone": "99999999999",
  "email": "email@email.com",
  "imagem": "url-example"
  "id_cliente": "uuid-example",
  "id_categoria": "uuid-example",
  "isAtivo": true
}
```

O método GET pelo ID deve retornar na response o seguinte:
```
{
  "id": "uuid-example",
  "nome": "estabelecimento1",
  "cnpj": "11111111000110,
  "descricao": "Restaurante Vegano"
  "endereco" : "Rua A, 100",
  "telefone": "99999999999",
  "email": "email@email.com",
  "imagem": "url-example"
  "id_cliente": "uuid-example",
  "id_categoria": "uuid-example",
  "isAtivo": true
}
```

O método PUT deve retornar na response o seguinte:
```
{
  "id": "uuid-example",
  "nome": "estabelecimento1",
  "cnpj": "11111111000110,
  "descricao": "Restaurante Vegano"
  "endereco" : "Rua A, 100",
  "telefone": "99999999999",
  "email": "email@email.com",
  "imagem": "url-example"
  "id_cliente": "uuid-example",
  "id_categoria": "uuid-example",
  "isAtivo": true
}
```
E deve ser enviado no corpo da request o seguinte:
```
{
  "nome": "estabelecimento1",
  "cnpj": "11111111000110,
  "descricao": "Restaurante Vegano"
  "endereco" : "Rua A, 100",
  "telefone": "99999999999",
  "email": "email@email.com",
  "imagem": "url-example"
  "id_cliente": "uuid-example",
  "id_categoria": "uuid-example",
  "isAtivo": true
}
```

O método DELETE não deve retornar nada na response.

#### Categoria

|Método|URL|Ação|
|--|--|--|
|GET|http://localhost:3000/categoria|Buscar todos os categorias|
|POST|http://localhost:3000/categoria|Cadastrar categoria|
|GET|http://localhost:3000/categoria/id|Buscar categoria pelo ID|
|PUT|http://localhost:3000/categoria/id|Alterar cadastro do categoria|
|DELETE|http://localhost:3000/categoria/id|Excluir registro do categoria|

O método GET ALL deve retornar na response o seguinte:
```
{
  "id": "uuid-example",
  "nome": "categoria1",
  "isAtivo": true
},
{
  "id": "uuid-example",
  "nome": "categoria2",
  "isAtivo": true
}
```

O método POST deve retornar na response o seguinte:
```
{
  "id": "uuid-example",
  "nome": "categoria1",
  "isAtivo": true
}
```
E deve ser enviado na request o seguinte:
```
{
  "nome": "categoria1",
  "isAtivo": true
}
```

O método GET pelo ID deve retornar na response o seguinte:
```
{
  "id": "uuid-example",
  "nome": "categoria1",
  "isAtivo": true
}
```

O método PUT deve retornar na response o seguinte:
```
{
  "id": "uuid-example",
  "nome": "categoria1",
  "isAtivo": true
}
```
E deve ser enviado na request o seguinte:
```
{
  "nome": "categoria1",
  "isAtivo": true
}
```

O método DELETE não deve retornar nada na response.

## Autor:

Raí Rafael Santos Silva



