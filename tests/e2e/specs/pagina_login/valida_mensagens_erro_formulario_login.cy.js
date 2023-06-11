describe('Valida mensagens de erro do formulário de login', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/login')
        cy.get('.card-title').should('contain', 'Olá')
    })

    it('Valida mensagem de erro input e-mail', () => {
        cy.get('#password').type('qa@123')

        cy.get('#login').click()

        cy.get('div.message-body')
        .should('contain', 'Informe seu e-mail.')
    })

    it('Valida mensagem de erro input senha', () => {
        cy.get('#email').type('rafael@outlook.com')

        cy.get('#login').click()

        cy.get('div.message-body')
        .should('contain', 'Informe sua senha.')
    })
})