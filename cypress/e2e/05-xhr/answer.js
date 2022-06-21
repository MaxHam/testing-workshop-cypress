/// <reference types="cypress" />
//
// note, we are not resetting the server before each test
//

// see https://on.cypress.io/intercept

it('starts with zero items (waits)', () => {
  cy.visit('/')
  /* eslint-disable-next-line cypress/no-unnecessary-waiting */
  cy.wait(1000)
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items', () => {
  // start Cypress network server
  // spy on route `GET /todos`
  // THEN visit the page
  cy.intercept('GET', '/todos').as('todos')
  cy.visit('/')
  cy.wait('@todos') // wait for `GET /todos` response
    // inspect the server's response
    .its('response.body')
    .should('have.length', 0)
  // then check the DOM
  // note that we don't have to use "cy.wait(...).then(...)"
  // because all Cypress commands are flattened into a single chain
  // automatically. Thus just write "cy.wait(); cy.get();" naturally
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (stubbed response)', () => {
  // start Cypress network server
  // spy on route `GET /todos`
  // THEN visit the page
  cy.intercept('GET', '/todos', []).as('todos')
  cy.visit('/')
  cy.wait('@todos') // wait for `GET /todos` response
    // inspect the server's response
    .its('response.body')
    .should('have.length', 0)
  // then check the DOM
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (fixture)', () => {
  // stub route `GET /todos`, return data from fixture file
  // THEN visit the page
  cy.intercept('GET', '/todos', { fixture: 'empty-list.json' }).as('todos')
  cy.visit('/')
  cy.wait('@todos') // wait for `GET /todos` response
    // inspect the server's response
    .its('response.body')
    .should('have.length', 0)
  // then check the DOM
  cy.get('li.todo').should('have.length', 0)
})

it('loads several items from a fixture', () => {
  // stub route `GET /todos` with data from a fixture file
  // THEN visit the page
  cy.intercept('GET', '/todos', { fixture: 'two-items' })
  cy.visit('/')
  // then check the DOM: some items should be marked completed
  // we can do this in a variety of ways
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
  // delay XHR to "/todos" by a few seconds
  // and respond with an empty list
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

  // shows Loading element
  cy.get('.loading').should('be.visible')

  // wait for the network call to complete
  cy.wait('@loading')

  // now the Loading element should go away
  cy.get('.loading').should('not.be.visible')
})

