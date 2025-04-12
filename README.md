# 🚀 Projeto de Automação de Testes com Cypress

Este repositório contém a automação de testes end-to-end (E2E) utilizando o framework [Cypress](https://www.cypress.io/). Os testes foram desenvolvidos com foco em dois fluxos principais: **Login** e **Cadastro**, garantindo a validação das regras de negócio e comportamento da aplicação.

## 🧪 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://docs.cypress.io/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## ✅ Casos de Teste Automatizados
### 📌 Login
- Login com credenciais válidas
- Login sem preencher os campos
- Login com e-mail inválido
- Login com senha incorreta

### 📌 Cadastro
- Cadastro com todos os dados válidos
- Cadastro sem preencher os campos obrigatórios
- Cadastro com e-mail inválido
- Cadastro com senha inválida

## ▶️ Como executar os testes

1. Instale as dependências do projeto:

```bash
npm install


2. Execute a interface interativa do Cypress:
npx cypress open

3. Ou execute os testes diretamente no terminal:
npx cypress run

📄 Requisitos
Node.js (versão recomendada: 18+)
Gerenciador de pacotes npm

📌 Próximas Melhorias
Separação de páginas via Page Object Model (POM)
Inclusão de massa de dados dinâmica
Execução dos testes em pipeline CI/CD
Validação visual (Visual Testing)


🧑‍💻 Autor
Desenvolvido por Mateus Almeida.
Este projeto faz parte da prática de automação de testes com Cypress, aplicando fundamentos aprendidos em bootcamps e estudos individuais.