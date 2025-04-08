/// <reference types="cypress" />

describe('Cenários da rotina Login', () => {

//hook - antes de cada it visita a página de Login
beforeEach(() => {
    cy.visit('/login');
});

  it('CT-001 - Login válido', () => {

    const email = 'mateus@gmail.com'

    cy.get('#user')
      .type(email)
    cy.get('#password')
      .type('123456')

    cy.get('#btnLogin')
      .click()
      
    cy.contains('#swal2-title', 'Login realizado')
      .should('be.visible');

    cy.contains('#swal2-html-container', `Olá, ${email}`)
      .should('be.visible')
  })

  it('CT-001.1 - Login sem credenciais', () => {
    cy.get('#btnLogin')
      .click()

    cy.contains('.invalid_input', 'E-mail inválido.')
      .should('be.visible')
  })

  it('CT-001.2 - Login com senha inválida', () => {

    cy.get('#user').type('mateus@gmail.com');
    cy.get('#password').type('12');
    cy.get('#btnLogin')
    .click()

  cy.contains('.invalid_input', 'Senha inválida.')
    .should('be.visible')
  })

  it('CT-001.3 - Login com e-mail inválido', () => {
    cy.get('#user').type('mateusgmail.com');
    cy.get('#password').type('123456');
    cy.get('#btnLogin')
    .click()

  cy.contains('.invalid_input', 'E-mail inválido.')
    .should('be.visible')
  })

  it('CT-001.4 - Login sem senha', () => {
    cy.get('#user').type('mateus@gmail.com');
    cy.get('#btnLogin')
    .click()

  cy.contains('.invalid_input', 'Senha inválida.')
    .should('be.visible')
  })

})