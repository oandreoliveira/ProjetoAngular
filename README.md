# Petin Recife Project

### Projeto fullstack desenvolvido utilizando no backend o Node.js e no frontend o Angular.

### Instalação e Execução:
#### Backend
Após realizar o clone da Aplicação, mudar para a pasta petin-backend, instalar as dependências com ``npm install`` e rodar migration para sincronizar o banco com ``npx prisma migrate dev``.

Então, para iniciar a aplicação Node, basta utilizar o comando ``npm run start``

#### Frontend
Após realizar o clone da Aplicação, mudar para a pasta petin-frontend, instalar as dependências utilizando o ``npm install``.

Então, para rodar a aplicação, basta utilizar o comando ``ng s``.

### Uso:
Para testar os Endpoints da API, basta rodar a aplicação NodeJS e então acessar a rota http://localhost:3000/api, e então será apresentada a tela do Swagger (OpenAPI). Para testar os Endpoints é necessário utilizar a rota de Login para gerar um Token válido e passar no Authorize. 

Também está disponibilizado um arquivo de configuração do Postman para que seja importado e no próprio Postman realizado os testes necessários. O arquivo se encontra na pasta ``/petin-backend/docs``.

### Acesso:
<hr>

<h3> ⚙ Para Acessar a Aplicação</h3>

O sistema possui dois usuários cadastrados, com diferentes restrições por perfil:

CPF: 78214007003 🔑 admin - Perfil de Administrador

- Este perfil dá acesso a todos os Recursos do sistema

CPF: 50425029042 🔑 12345 - Perfil de Cliente

- Este Perfil só dá acesso ao estabelecimentos do cliente

<hr>

### Autores:
- André Cezar de Oliveira
- Raí Rafael Santos Silva