/// <reference types="cypress" />
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// Lösche in der Applikation selber alle Items bevor du den Test startest.
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

beforeEach(() => {
  cy.visit('localhost:3000')
})

it('loads', () => {
  cy.contains('h1', 'todos')
})

it('adds two items', () => {
  cy.get('.new-todo').type('first item{enter}')
  cy.contains('li.todo', 'first item').should('be.visible')
  cy.get('.new-todo').type('second item{enter}')
  cy.contains('li.todo', 'second item').should('be.visible')
})

it('can mark an item as completed', () => {
  // Erstelle zwei Items
  addItem('simple')
  addItem('hard')

  // Markiere das erste Item als erledigt
  cy.contains('li.todo', 'simple').should('exist').find('.toggle').check()

  // Überprüfe ob das erste Item abgehakt wurde (class =  completed)
  cy.contains('li.todo', 'simple').should('have.class', 'completed')
  // Überprüfe, dass die anderen Items noch nicht abgehakt wurden
  cy.contains('li.todo', 'hard').should('not.have.class', 'completed')
})

/**
 * Fügt ein Todo Item hinzu
 * @param {string} text
 */
const addItem = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    addItem(`item ${k}`)
  }
  // Überprüfe die Anzahl an hinzugefügten Items
  cy.get('li.todo').should('have.length', 5)
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

it('does not allow adding blank todos', () => {
  cy.on('uncaught:exception', (e) => {
    // Welcher Error wird ausgegeben wenn man versucht ein leeres Todo zu erstellen ?
    // Prüfe ob e.message dem erwarteten Error Text gleicht.
    // return false damit kein Error geworfen wird
    expect(e.message).to.include('Cannot add a blank todo')
  })
  addItem(' ')
})