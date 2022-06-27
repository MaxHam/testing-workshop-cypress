/// <reference types="cypress" />
/**
 * Fügt ein Todo Item hinzu
 * @param {string} text
 */
const addItem = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

/**
 * 
 * https://on.cypress.io/writefile
 * https://on.cypress.io/task
 * https://on.cypress.io/plugins-guide
 * https://on.cypress.io/fixture
 * 
 * Tipp: Die Daten der Todo App werden unter todomvc/data.json gespeichert
 * Achte darauf wie die JSON aufgebaut ist
 */

describe('reset data using cy.writeFile', () => {
  beforeEach(() => {
    // Überschreibe die Datei "todomvc/data.json" mit einem stringified Todos Objekt
    // Dateipfad ist relativ zum Projekt Rootverzeichnis in welchem cypress.json befindet
    cy.visit('/')
  })

  it('adds two items', () => {
    addItem('first item')
    addItem('second item')
    cy.get('li.todo').should('have.length', 2)
  })
})

describe('reset data using a task', () => {
  beforeEach(() => {
    // Nutze cy.task um die Daten zurückzusetzen
    // Tasks sind zu finden unter cypress/e2e/plugins/index.js
    cy.visit('/')
  })

  it('adds two items', () => {
    addItem('first item')
    addItem('second item')
    cy.get('li.todo').should('have.length', 2)
  })
})

describe('set initial data', () => {
  it('sets data to complex object right away', () => {
    // Nutze cy.task um die Todo Daten als ein spezifisches Objekt zu setzen
    cy.visit('/')
    // Überprüfe was gerendert wird
  })

  it('sets data using fixture', () => {
    // Lade Todos von der Fixture "cypress/fixtures/two-items.json"
    // Nutze cy.task um diese Fixture Daten zu setzen
    cy.visit('/')
    // Überprüfe was gerendert wird
  })
})
