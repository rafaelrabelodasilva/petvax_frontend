describe('Submete formulário de cadastro com sucesso', () => {

    before(() => {
        cy.visit('http://localhost:8080/signup')
        cy.get('.card-title').should('contain', 'Formulário de cadastro')
    })

    it('Preencho o formulário de cadastro com dados válidos', () => {
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('joaosilva@outlook.com')
        cy.get('#password').type('qa@123')

        cy.get('button[type="submit"]').click()
    })
})