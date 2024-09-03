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
