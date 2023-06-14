describe('Submete formulário de cadastro do novo pet com sucesso', () => {

    before(() => {
        cy.visit('http://localhost:8080/login')
        cy.get('.card-title').should('contain', 'Olá')

        cy.get('#email').type('rafael@outlook.com')
        cy.get('#password').type('qa@123')

        cy.get('#login').click()

        cy.get('.container.justify-content-end > .col')
        .should('contain', 'Visitaram o pet')

        cy.get('#novoPet').click()

        cy.get('#nomePet').type('Lua')

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

        cy.get('#petCard').contains('p#pet-name', 'Lua').should('exist');
    })

    it('Deleta pet criado', () => {
        cy.contains('a', 'Remover').click();
        cy.wait(1000);
        cy.get('#modalDeletaPet').should('contain', 'Remover pet')
        cy.contains('button', 'Remover').click();
        cy.wait(1000);
        cy.get('#petCard').should('not.contain', 'p#pet-name', 'Lua');
        //Aqui tem que melhorar a validação pois atualmente não é exibido nada na tela, futuramente será exibido alguma mensagem informativa
    })
})