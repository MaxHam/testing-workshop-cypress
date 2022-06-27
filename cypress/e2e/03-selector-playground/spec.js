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


it('can delete an item', () => {
  // Füge zwei Items hinzu
  // Lösche das erste Item mit Cypress Studio
  // Überprüfe ob das Item wirklich aus der DOM verschwunden ist
  // Überprüfe ob das andere Item noch existiert
})


