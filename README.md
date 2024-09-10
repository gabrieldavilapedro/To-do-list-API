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

1. **Clone o repositório, execute o seguinte comando no terminal:**

```bash
git git@github.com:gabrieldavilapedro/To-do-list-API.git
```

2. **Entre na pasta do projeto:**

```bash
cd To-do-list-web-server/
```

3. **Apos clonar o repositorio, crie as variáveis de ambiente:**

```bash
$ cp postgres.env.example postgres.env
```

```bash
$ cp .env.example .env
```

Esses comandos criam dois arquivos ignorados pelo git, neles você pode alterar as variáveis de ambiente para o desenvolvimento local.

4. **Agora instale as dependências:**

```bash
npm install
```

5. **Execute o Docker Compose:**

```bash
docker-compose up
```

6. **Crie o banco de dados:**

```bash
env $(cat .env) npx sequelize db:create
```

7. **Execute as migrações:**

```bash
env $(cat .env) npx sequelize db:migrate
```

8. _Execute as seeds se quiser popular o banco com alguns dados:_

```bash
env $(cat .env) npx sequelize db:seed:all
```

### Rodando testes

1. **Crie o banco de dados de teste:**

```bash
env $(cat .env) NODE_ENV=test npx sequelize db:create
```

2. **Execute as migrações:**

```bash
env $(cat .env) NODE_ENV=test npx sequelize db:migrate
```

3. **Execute os testes:**

```bash
npm run test
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
