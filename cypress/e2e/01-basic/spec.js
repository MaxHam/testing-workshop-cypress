/// <reference types="cypress" />
// @ts-check

/**
 * Dieser Test ruft die Testapplikation auf und soll überprüfen ob das Todo Input Feld, der Footer und die Überschrift der Website verfügbar sind?
 * Dieser Test schlägt fehl. Kannst du den Fehler beheben und finden ?
 *
 * Tipp: Welchen Wert hat das h1 Element ?
 */

it('loads', () => {
  // Applikation läuft unter Port 3000
  cy.visit('localhost:3000')

  cy.get('.new-todo').get('footer')

  cy.contains('h1', 'Todos App')
})
