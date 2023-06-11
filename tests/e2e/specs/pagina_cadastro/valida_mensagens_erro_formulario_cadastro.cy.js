describe('Valida mensagens de erro do formulário de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/signup')
        cy.get('.card-title').should('contain', 'Formulário de cadastro')
    })

    it('Valida mensagem de erro input primeiro nome', () => {
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('joaosilva@outlook.com')
        cy.get('#password').type('qa@123')

        cy.get('button[type="submit"]').click()

        cy.get('input#firstName')
        .next('small.text-danger')
        .should('contain', 'Por favor informe seu primeiro nome.')
    })

    it('Valida mensagem de erro input sobrenome', () => {
        cy.get('#firstName').type('Joao')
        cy.get('#email').type('joaosilva@outlook.com')
        cy.get('#password').type('qa@123')

        cy.get('button[type="submit"]').click()

        cy.get('input#lastName')
        .next('small.text-danger')
        .should('contain', 'Por favor informe seu sobrenome.')
    })

    it('Valida mensagem de erro input email', () => {
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Silva')
        cy.get('#password').type('qa@123')

        cy.get('button[type="submit"]').click()

        cy.get('input#email')
        .next('small.text-danger')
        .should('contain', 'Por favor informe um e-mail.')
    })

    it('Valida mensagem de erro input senha', () => {
        cy.get('#firstName').type('Joao')
        cy.get('#lastName').type('Silva')
        cy.get('#email').type('joaosilva@outlook.com')

        cy.get('button[type="submit"]').click()

        cy.get('input#password')
        .next('small.text-danger')
        .should('contain', 'Por favor informe uma senha.')
    })
})