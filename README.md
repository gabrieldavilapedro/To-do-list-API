# To-do List API

## Descrição

Este é um projeto de uma API para gerenciar uma lista de tarefas (to-do list).

## Funcionalidades

- Criar uma nova tarefa;
- Listar todas as tarefas;
- Atualizar uma tarefa existente;
- Excluir uma tarefa;

## Tecnologias utilizadas

- Node.js;
- Express.js;
- Postgres;
- Docker compose;
- Sequelize;
- Sequelize Cli;

## Rodando localmente

Primeiro crie as variáveis de ambiente:

```
$ cp postgres.env.example postgres.env
$ cp .env.example .env
```

Esses comandos criam dois arquivos ignorados pelo git, neles você pode alterar as variáveis de ambiente para o desenvolvimento local.

Agora instale as dependências:

```
npm install
```

Execute o Docker Compose:

```
docker-compose up
```

Crie o banco de dados:

```
env $(cat .env) npx sequelize db:create
```

Execute as migrações:

```
env $(cat .env) npx sequelize db:migrate
```

Execute as seeds:

```
env $(cat .env) npx sequelize db:seed:all
```

### Rodando testes

```
env $(cat .env) NODE_ENV=test npx sequelize db:create
env $(cat .env) NODE_ENV=test npx sequelize db:migrate
```

## Documentação das Rotas

Agora faça o download deste arquivo, onde estão documentadas as rotas:

[To-Do-List-API.postman](./To-do-list-API.postman_collection.json)

### Importando no Postman

1. Abra o Postman.
2. Clique no botão `Import` no canto superior esquerdo.
3. Selecione a aba `File`.
4. Selecione o arquivo `Project-blogs-api.postman` que você baixou.
5. Clique em `Import`.

Após importar, você verá todas as rotas documentadas no Postman e poderá fazer as requisições diretamente.

### Exemplo de Uso

Aqui está um exemplo de como fazer uma requisição usando o Postman:

1. Selecione a rota que você deseja testar.
2. Configure os parâmetros necessários (se houver).
3. Clique em `Send` para enviar a requisição.
4. Veja a resposta no painel de resposta do Postman.

Com essas instruções, você deve ser capaz de baixar e importar o arquivo de configuração do Postman e começar a fazer requisições para a API documentada.
