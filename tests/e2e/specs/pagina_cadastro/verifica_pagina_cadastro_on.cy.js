describe('Verifica página login on', () => {
  it('Visito a página de login', () => {
    cy.visit('http://localhost:8080/signup')
    cy.get('.card-title').should('contain', 'Formulário de cadastro')
  })
})
