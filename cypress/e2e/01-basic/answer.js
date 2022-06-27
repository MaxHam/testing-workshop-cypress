/// <reference types="cypress" />
// @ts-check
it('loads', () => {
  cy.visit('localhost:3000')

  // https://on.cypress.io/get
  cy.get('.new-todo')

  // https://on.cypress.io/contains
  cy.contains('h1', 'todos')
  cy.contains('h1', /^todos$/)

  cy.contains('[data-cy=app-title]', 'todos')
})
