describe('Submete formulário de cadastro do novo pet com sucesso', () => {

    before(() => {
        cy.visit('http://localhost:8080/login')
        cy.get('.card-title').should('contain', 'Olá')
    })

    it('Faz cadastro do novo pet com sucesso', () => {
        cy.get('#email').type('rafael@outlook.com')
        cy.get('#password').type('qa@123')

        cy.get('#login').click()

        cy.get('.justify-content-between > .fs-5')
        .should('contain', 'Pets cadastrados')

        cy.get('#novoPet').click()

        cy.get('#nomePet').type('Thor')

        cy.get('#especiePet').should('be.visible').select('Canina')

        cy.get('#generoPet').should('be.visible').select('Macho')

        cy.get('#racaPet').should('be.visible').select('Siamês')

        cy.get('#pesoPet').type('2')

        const data = '2023-01-31';
        cy.get('#nascimentoPet').invoke('val', data).trigger('input');

        cy.get('#castradoPet').should('be.visible').select('Sim')

        cy.get('#nomeRespPet').type('Lucas')
        cy.get('#sobrenomeRespPet').type('Rabelo da Silva')
        cy.get('#contato1RespPet').type('48996561455')
        cy.get('#contato2RespPet').type('48996568525')
        cy.contains('button', 'Salvar').click();

        //Precisa adicionar a validação do snackbar de que foi cadastrado com sucesso

        cy.get('#petCard').contains('p#pet-name', 'Thor').should('exist');
    })
})