/// <reference types="cypress" />
//
// note, we are not resetting the server before each test
//

// see https://on.cypress.io/intercept

it('starts with zero items (waits)', () => {
  cy.visit('/')
  // Warte 1 Sekunde
  // Dann überprüfe die Anzahl an Todo Items
  cy.wait(1000)
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items', () => {
  // Spionier die Route `GET /todos` aus
  // mit cy.intercept(...).as(<alias name>)
  // Dann besuche die Seite
  cy.intercept('GET', '/todos').as('todos')
  cy.visit('/')
  // Warte auf `GET /todos` Route
  // mit "@<alias name>" string
  // Dann überprüfe die DOM
  cy.wait('@todos') 
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (stubbed response)', () => {
  // Stub `GET /todos` mit einem leeren Array([])
  // Speichere den Stub als Alias
  // Dann besuche die Website
  cy.intercept('GET', '/todos', []).as('todos')
  cy.visit('/')
  // Warte auf den Route Alias
  // Dann überprüfe die DOM
  cy.wait('@todos')
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (fixture)', () => {
  // Stub `GET /todos` mit der Fixture "empty-list"
  // Dann besuche die Seite
  cy.intercept('GET', '/todos', { fixture: 'empty-list.json' }).as('todos')
  cy.visit('/')
  // Warte auf den Route Alias
  // Dann überprüfe die DOM
  cy.wait('@todos') 
    .its('response.body')
    .should('have.length', 0)
  cy.get('li.todo').should('have.length', 0)
})

it('loads several items from a fixture', () => {
  // Stub `GET /todos` mit der Fixture "two-items"
  // Dann besuche die Seite
  cy.intercept('GET', '/todos', { fixture: 'two-items' })
  cy.visit('/')
  // Dann überprüfe die DOM: ein paar Todo Items sollten abgehakt sein

  cy.get('li.todo').should('have.length', 2)
  cy.get('li.todo.completed').should('have.length', 1)
  cy.contains('.todo', 'first item from fixture')
    .should('not.have.class', 'completed')
    .find('.toggle')
    .should('not.be.checked')
  cy.contains('.todo.completed', 'second item from fixture')
    .find('.toggle')
    .should('be.checked')
})

it('shows loading element', () => {
  // Verzögere den XHR Request auf "/todos" um 2 Sekunden
  // und sende als Response ein leeres Array
  cy.intercept(
    {
      method: 'GET',
      pathname: '/todos'
    },
    {
      body: [],
      delayMs: 2000
    }
  ).as('loading')
  cy.visit('/')

  // Überprüfe ob eine Lade Element angezeigt wird
  // Warte bis der XHR Request fertig ist
  // Überprüfe ob das Lade Element nicht mehr angezeigt wird
  cy.get('.loading').should('be.visible')

  cy.wait('@loading')

  cy.get('.loading').should('not.be.visible')
})

