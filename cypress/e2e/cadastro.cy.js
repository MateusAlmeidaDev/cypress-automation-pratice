/// <reference types="cypress" />

describe('Cenários da rotina de cadastro', () => {

    beforeEach(() => {
        cy.visit('/register');
    });

    it('Cadastro de novo usuário', () => {

        const nome = 'Mateus'

        cy.get('#user').type(nome);
        cy.get('#email').type('mateus@gmail.com');
        cy.get('#password').type('123456');

        cy.get('#btnRegister').click();

        cy.contains('#swal2-title', 'Cadastro realizado!')
            .should('be.visible')
        cy.contains('#swal2-html-container', `Bem-vindo ${nome}`)
            .should('be.visible')
    });

    it('Cadastro sem campos obrigatórios', () => {
        
        cy.get('#btnRegister').click();

        cy.contains('.errorLabel', 'O campo nome deve ser prenchido')
            .should('be.visible')

    });

    it('Cadastro sem nome', () => {

        cy.get('#email').type('mateus@gmail.com')
        cy.get('#password').type('123456');

        cy.get('#btnRegister').click();

        cy.contains('.errorLabel', 'O campo nome deve ser prenchido')
            .should('be.visible')
    });

    it('Cadastro sem e-mail', () => {
        cy.get('#user').type('Mateus')
        cy.get('#password').type('123456')

        cy.get('#btnRegister').click();

        cy.contains('.errorLabel', 'O campo e-mail deve ser prenchido corretamente')
            .should('be.visible')
    });

    it('Cadastro sem senha', () => {
        cy.get('#user').type('Mateus')
        cy.get('#email').type('mateus@gmail.com')

        cy.get('#btnRegister').click();

        cy.contains('.errorLabel', 'O campo senha deve ter pelo menos 6 dígitos')
            .should('be.visible')        
    });
});