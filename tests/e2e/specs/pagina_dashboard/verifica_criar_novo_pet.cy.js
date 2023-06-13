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

        cy.get('#novoPet').click()

        cy.get('#nomePet').type('Romeu')

        cy.get('#especiePet').should('be.visible').select('Canina')

        cy.get('#generoPet').should('be.visible').select('Macho')

        cy.get('#racaPet').should('be.visible').select('Siamês')

        cy.get('#pesoPet').type('2')

        const moment = require('moment')
        const data = moment('31/01/2023', 'DD/MM/YYYY').format('YYYY-MM-DD')
        cy.get('#nascimentoPet').type(data)

        cy.get('#castradoPet').should('be.visible').select('Sim')

        cy.get('nomeRespPet').type('Lucas')
        cy.get('sobrenomeRespPet').type('Rabelo da Silva')
        cy.get('contato1RespPet').type('48996561455')
        cy.get('contato2RespPet').type('48996568525')
        cy.get('button>Salvar').click()
    })
})