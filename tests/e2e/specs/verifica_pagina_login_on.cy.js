// https://docs.cypress.io/api/table-of-contents

describe('Verifica página login on', () => {
  it('Visito a página de login', () => {
    cy.visit('http://localhost:8080/login')
    cy.contains('h2', 'Olá')
  })
})
