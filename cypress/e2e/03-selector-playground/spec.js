/// <reference types="cypress" />

/**
 * 
 * https://on.cypress.io/click
 * https://on.cypress.io/find
 * https://on.cypress.io/assertions
 * 
 * Tipp: Nutze "force: true" in der Click Funktion
 */

beforeEach(() => {
  // Applikation läuft unter Port 3000
  cy.visit('/')
})
it('loads', () => {
  cy.contains('h1', 'todos')
})

it('add an item', () => {
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.new-todo').clear();
  cy.get('.new-todo').type('Test{enter}');
  cy.get('.toggle').check();
  /* ==== End Cypress Studio ==== */
})


it('can delete an item', () => {
  // Lösche Items mit Cypress Studio
})
