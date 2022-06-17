/// <reference types="cypress" />
/* eslint-disable no-unused-vars */

beforeEach(() => {
  // application should be running at port 3000
  // Applikation läuft unter Port 3000
  cy.visit('/')
})
it('loads', () => {
  cy.contains('h1', 'todos')
})

it('can delete an item', () => {
  // Füge zwei Items hinzu
  // Lösche das erste Item
  // Nutze {force: true}
  // Überprüfe ob das Item wirklich aus der DOM verschwunden ist
  // Überprüfe ob das andere Item noch existiert
})
