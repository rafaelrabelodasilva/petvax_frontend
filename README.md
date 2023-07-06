# O projeto

Criei este projeto com o objetivo de aplicar meus conhecimentos em Vue 3 e automação de testes. Esta aplicação tem o foco em cadastrar pets que visitaram o veterinário. Nela, é possível submeter um cadastro para efetuar o login na aplicação, além de cadastrar, editar e excluir um pet. O usuário também pode cadastrar um procedimento para o pet, que por debaixo dos panos será vinculado através do _id do pet no MongoDB. Além disso, implementei testes automatizados do front-end utilizando o Cypress 12. O backend foi feito em outro projeto, o banco de dados não relacional utilizado foi o MongoDB.

![gif](./src/img/exibindo_aplicacao_finalizada.gif "Exibindo aplicação finalizada")

A aplicação está dividida em:

- [Tela de login](#tela-de-login)
- [Tela de cadastro](#tela-de-cadastro)
- [Dashboard](#dashboard)

### Requisitos

Certifique-se de ter as seguintes dependências instaladas antes de prosseguir:

- Node.js (versão 18.15.0)

## Instalação

Siga as instruções abaixo para configurar e instalar o projeto:

1. Clone o repositório: `git clone https://github.com/rafaelrabelodasilva/petvax-frontend`
2. Acesse o diretório do projeto: `cd frontend`
3. Instale as dependências: `npm install`


## Dependências

Neste projeto foi utilizado as seguintes dependências:

- Fontawesome
- Axios
- Bootstrap
- Vue
- Vue router
- Vue CLI
- Cypress

Para instalar as dependências do projeto basta digitar o comando abaixo no terminal:

`$ npm install`

## Automação com Cypress

A aplicação ficou bastante precária, o que resultou em várias das possibilidades que eu planejava para a criação dos testes não terem sido bem sucedidas. Por esse motivo, decidi realizar apenas alguns testes e iniciar um novo projeto, com o objetivo de aprimorar meus conhecimentos e melhorar ainda mais meus testes automatizados.

![img](./src/img/automacao_front.png "Exibindo automação do front com o Cypress")

Para executar os testes, siga as etapas abaixo:

1. Certifique-se de que o servidor local esteja em execução.
2. No terminal, execute o comando: `npm run cypress`

## Telas e funcionalidades

### Tela de login

Nesta tela, o usuário poderá efetuar o login na aplicação com os dados efetuados no cadastro.

![img](./src/img/tela_login.png "Exibindo tela de login")

### Tela de cadastro

Nesta tela, o usuário pode realizar o cadastro para obter acesso às credenciais para acessar à aplicação.

![img](./src/img/formulario_cadastro.png "Exibindo o formulário de cadastro")

### Dashboard

Nesta tela o usuário poderá visualizar os pets cadastrados e também terá acesso a algumas funcionalidades.

![img](./src/img/dashboard.png "Exibindo dashboard")

**Novo pet**

Exibe um formulário para cadastro de um novo pet após cadastrado será feito uma chamada no backend pelo axios para que a lista de pet cadastrados seja atualizada automaticamente.

![img](./src/img/formulario_cadastro_pet.png "Exibindo formulário de cadastro do pet")

**Card**

No card exibido quando algum pet está cadastrado podemos acessar as seguintes funcionalidades:

![img](./src/img/card_pet.png "Exibindo card do pet")

- Ver carteirinha: nesta opção será exibido ao usuário a carteirinha do pet com as informações que foram preenchidas no formulário de cadastro. Essas informações vem do MongoDB.

![img](./src/img/carteirinha_pet.png "Exibindo a carteirinha do pet")

- Ver procedimentos: nesta opção será exibido ao usuário os procedimentos cadastrados para o pet. 

![img](./src/img/procedimentos_pet.png "Exibindo procedimentos do pet")

- Adicionar novo procedimento: nesta opção será exibido ao usuário um formulário de cadastro de um novo procedimento.

![img](./src/img/modal_novo_procedimento.png "Exibindo modal novo procedimento")

- Buscar: ação não implementada.

- Listagem: será listado ao usuário todos os procedimentos cadastrados para o pet selecionado. Essas informações vem do MongoDB.

- Editar informações do pet: nesta opção será exibido um formulário com todas as informações pertinentes ao pet já cadastrado. Aqui o usuário poderá alterar qualquer informação que após ser salva será automaticamente atualizado na carteirinha do pet. Essas informações vem do MongoDB.

- Deletar pet: nesta opção após confirmado será deletado o pet cadastrado. Não foi implementado o delete na collection procedures, ou seja, quando o pet é excluído, não será excluído todos os procedimentos cadastrados com o ID dele. 

![img](./src/img/modal_remover_pet.png "Exibindo modal remover pet")

**Sair**

Desloga o usuário da aplicação, por debaixo dos panos é removido o user_token do local storage do navegador.

## Contribuição

Se você deseja contribuir para o projeto, siga as etapas abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b feature/sua-feature`
3. Faça as alterações desejadas no código.
4. Faça commit das suas alterações: `git commit -m 'Adiciona sua feature'`
5. Envie as alterações para o repositório remoto: `git push origin feature/sua-feature`
6. Abra um pull request no repositório original.

## Contato

Para mais informações, entre em contato pelo meu [LinkedIn](https://www.linkedin.com/in/rafaelrabelodasilva/)