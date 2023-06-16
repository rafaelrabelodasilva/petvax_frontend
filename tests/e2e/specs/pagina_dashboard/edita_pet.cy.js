describe('Edita pet já cadastrado', () => {

    before(() => {
        cy.visit('http://localhost:8080/login')
        cy.get('.card-title').should('contain', 'Olá')

        cy.get('#email').type('rafael@outlook.com')
        cy.get('#password').type('qa@123')

        cy.get('#login').click()

        cy.get('.container.justify-content-end > .col')
        .should('contain', 'Visitaram o pet')

        cy.get('#novoPet').click()

        cy.get('#nomePet').type('Olix')

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

        cy.get('#petCard').contains('p#pet-name', 'Olix').should('exist');
    })

    it('Edita pet já cadastrado com sucesso', () => {
        cy.get('.card-body > .d-flex > a').click()

        cy.get('#nomePet').clear().type('Lua')

        cy.get('#especiePet').should('be.visible').select('Felina')
        cy.get('#generoPet').should('be.visible').select('Fêmea')
        cy.get('#racaPet').should('be.visible').select('Siamês')
        cy.get('#pesoPet').clear().type('1,2')

        const data = '2023-04-04';
        cy.get('#nascimentoPet').invoke('val', data).trigger('input');

        cy.get('#castradoPet').should('be.visible').select('Não')
        cy.get('#nomeRespPet').clear().type('Miri')
        cy.get('#sobrenomeRespPet').clear().type('Crepaldi')
        cy.get('#contato1RespPet').clear().type('48996568825')
        cy.get('#contato2RespPet').clear().type('48996365214')
        cy.contains('button', 'Salvar').click();

        cy.get('#petCard').contains('p#pet-name', 'Lua').should('exist');
    })
})