describe('Verifica página cadastro on', () => {
    it('Visito a página de cadastro', () => {
        cy.visit('http://localhost:8080/signup')
        cy.contains('h2', 'Formulário de cadastro')
    })
})