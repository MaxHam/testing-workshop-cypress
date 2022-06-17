/// <reference types="cypress" />

/**
 * Fügt ein Todo Item hinzu
 * @param {string} text
 */
const addItem = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

beforeEach(() => {
  cy.visit('/')
})
it('loads', () => {
  cy.contains('h1', 'todos')
})

it('can delete an item', () => {
  // Füge zwei Items hinzu
  addItem('simple')
  addItem('hard')
  // Lösche das erste Item
  cy.contains('li.todo', 'simple')
    .should('exist')
    .find('.destroy')
    // Nutze {force: true}
    .click({ force: true })

  // Überprüfe ob das Item wirklich aus der DOM verschwunden ist
  cy.contains('li.todo', 'simple').should('not.exist')
  // Überprüfe ob das andere Item noch existiert
  cy.contains('li.todo', 'hard').should('exist')
})
