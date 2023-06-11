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

        cy.get('#cadastrarPet').click()

        cy.get('#nomePet').type('Romeu')

        cy.get('#especiePet').click()
        cy.get('option>Canina').click()

        cy.get('#generoPet').click()
        cy.get('option>Macho').click()

        cy.get('#racaPet').click()
        cy.get('option>Siamês').click()

        cy.get('pesoPet').type('2')
        cy.get('nascimentoPet').type('31/01/2023')

        cy.get('#castradoPet').click()
        cy.get('option>Sim').click()

        cy.get('nomeRespPet').type('Lucas')
        cy.get('sobrenomeRespPet').type('Rabelo da Silva')
        cy.get('contato1RespPet').type('48996561455')
        cy.get('contato2RespPet').type('48996568525')
        cy.get('button>Salvar').click()
    })
})