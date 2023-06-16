describe('Edita procedimento já cadastrado', () => {

    before(() => {
        cy.visit('http://localhost:8080/login')
        cy.get('.card-title').should('contain', 'Olá')

        cy.get('#email').type('rafael@outlook.com')
        cy.get('#password').type('qa@123')

        cy.get('#login').click()

        cy.get('.container.justify-content-end > .col')
            .should('contain', 'Visitaram o pet')

        cy.get('#novoPet').click()

        cy.get('#nomePet').type('Nick')

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
        cy.contains('button', 'Salvar').click()

        //Precisa adicionar a validação do snackbar de que foi cadastrado com sucesso

        cy.get('#petCard').contains('p#pet-name', 'Nick').should('exist');

        //Cadastra novo procedimento
        cy.get('#petCard')
            .contains('p#pet-name', 'Nick')
            .parents('.card')
            .find('a:contains("Ver carteirinha")')
            .click();

        cy.contains('button', ' Procedimento ').click()

        cy.wait(1000);

        cy.get('#novoProcedimento').should('contain', 'Cadastrar procedimento')
        //Precisa validar o modal
        cy.get('#procedureName').type('Vermífugo')
        cy.get('#procedureAddInfo').type('1 comprimido')
        const procedureDate = '2023-01-31';
        cy.get('#procedureDate').invoke('val', procedureDate).trigger('input');
        const procedureNextOne = '2023-01-31';
        cy.get('#procedureNextOne').invoke('val', procedureNextOne).trigger('input');
        cy.get('#procedureRespDoctor').type('Dra Léia')
        cy.get('#novoProcedimento > .modal-dialog > .modal-content > .modal-footer > .btn-success').click();

        cy.wait(1000);

        cy.get('.modal-body > .modal-footer > .btn-secondary').click()

        cy.get('#petCard')
            .contains('p#pet-name', 'Nick')
            .parents('.card')
            .find('a:contains("Procedimentos")')
            .click();

        cy.get('#modalVerProcedimentos').should('contain', 'Procedimentos do pet')
        cy.get('#modalVerProcedimentos').contains('td', 'Vermífugo').should('exist');
    })

    it('Altero as informações do procedimento já criado', () => {
        cy.get('#modalVerProcedimentos')
            .should('be.visible')
            .within(() => {
                cy.contains('h1.modal-title.fs-5', 'Procedimentos do pet');
            });

        cy.get('#editaProced').click();
        cy.wait(1000);

        cy.get('#novoProcedimento').should('contain', 'Cadastrar procedimento')
        //Precisa validar o modal
        cy.get('#procedureName').clear().type('Teste FELVI')
        cy.get('#procedureAddInfo').clear().type('1 vacina')
        const procedureDate = '2023-06-15';
        cy.get('#procedureDate').invoke('val', procedureDate).trigger('input');
        const procedureNextOne = '2023-05-15';
        cy.get('#procedureNextOne').invoke('val', procedureNextOne).trigger('input');
        cy.get('#procedureRespDoctor').clear().type('Dra Maria')
        cy.get('#novoProcedimento > .modal-dialog > .modal-content > .modal-footer > .btn-success').click();

        cy.get('#modalVerProcedimentos > .modal-dialog > .modal-content > .modal-header > .btn-close').click()

        cy.wait(1000);

        cy.get('#petCard')
            .contains('p#pet-name', 'Nick')
            .parents('.card')
            .find('a:contains("Procedimentos")')
            .click();

        cy.get('#modalVerProcedimentos').should('contain', 'Procedimentos do pet')
        cy.get('#modalVerProcedimentos').contains('td', 'Teste FELVI').should('exist');
    })
})