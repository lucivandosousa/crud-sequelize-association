# API de usuários usando Sequelize e PostgreSQL

Esta é uma API construída usando o framework Express.js para Node.js e Sequelize com persistência em um banco relacional PostgreSQL. A API simula operações básicas CRUD (Criar, Ler, Atualizar e Excluir) em um banco relacional com relacionamento de tabelas utilizando as associações do sequelize.

## Requisitos

- Node.js
- npm (gerenciador de pacotes do Node.js)
- PostgreSQL

## Instalação

### 1. Clone o repositório para sua máquina local:

```
https://github.com/lucivandosousa/crud-sequelize-association
```
### 2. Navegue até o diretório do projeto

### 3. Instale as dependências necessárias:

```
npm install
```
## Funcionalidades
### 1. Iniciar a API.

Para criar o banco de dados, execute o seguinte comando:

```
npx sequelize db:create
```

Para migrar as tabelas para o banco de dados, execute o seguinte comando:

```
npx sequelize db:migrate
```

Para iniciar a API, execute o seguinte comando:

```
npm run dev
```
A API será executada na porta 3000 por padrão, ou na porta especificada pela variável de ambiente PORT.

### 2. Endpoints

 - GET "/" Retorna uma mensagem indicando que a API está funcionando.

 - POST "/users" Adiciona um novo usuário à lista de produtos.

 - GET "/users" Retorna a lista completa de usuários.

 - GET "/users/:id" Retorna um usuário específico com base no ID fornecido.

 - PUT "/users/:id" Atualiza um usuário específico com base no ID fornecido.

 - DELETE "/users/:id" Exclui um usuário específico com base no ID fornecido.
 
 - POST "/users/:user_id/address" Adiciona um novo endereço para o usuário fornecido segundo o ID.

 - GET "/users/:user_id/address" Retorna todos os endereços de um usuário segundo o ID fornecido.

