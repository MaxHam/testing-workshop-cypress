/// <reference types="cypress" />
//
// note, we are not resetting the server before each test
// and we want to confirm that IF the application has items already
// (for example add them manually using the browser localhost:3000)
// then these tests fail!
//
// see https://on.cypress.io/intercept

/* eslint-disable no-unused-vars */

it('starts with zero items (waits)', () => {
  cy.visit('/')
  // wait 1 second
  // then check the number of items
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items', () => {
  // start Cypress network proxy with cy.server()
  // spy on route `GET /todos`
  //  with cy.intercept(...).as(<alias name>)
  // THEN visit the page
  cy.visit('/')
  // wait for `GET /todos` route
  //  using "@<alias name>" string
  // then check the DOM
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (stubbed response)', () => {
  // start Cypress network server
  // stub `GET /todos` with []
  // save the stub as an alias
  // THEN visit the page
  cy.visit('/')

  // wait for the route alias
  // grab its response body
  // and make sure the body is an empty list
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (fixture)', () => {
  // start Cypress network server
  // stub `GET /todos` with fixture "empty-list"
  // visit the page
  cy.visit('/')
  

  // then check the DOM
  cy.get('li.todo').should('have.length', 0)

})

it('loads several items from a fixture', () => {
  // stub route `GET /todos` with data from a fixture file "two-items"
  // THEN visit the page
  cy.visit('/')
  
  // then check the DOM: some items should be marked completed
  // we can do this in a variety of ways
})


it('shows loading element', () => {
  // delay XHR to "/todos" by a few seconds
  // and respond with an empty list
  cy.visit('/')

  // shows Loading element
  // wait for the network call to complete
  // now the Loading element should go away
})
