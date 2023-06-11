describe('Submete formulário de login com sucesso', () => {

    before(() => {
        cy.visit('http://localhost:8080/login')
        cy.get('.card-title').should('contain', 'Olá')
    })

    it('Faz login com sucesso', () => {
        cy.get('#email').type('rafael@outlook.com')
        cy.get('#password').type('qa@123')

        cy.get('#login').click()

        cy.get('.container.justify-content-end > .col')
        .should('contain', 'Visitaram o pet')
    })
})