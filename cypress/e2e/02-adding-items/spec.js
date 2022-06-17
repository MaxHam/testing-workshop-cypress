/// <reference types="cypress" />

const addItem = (text) => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
it('loads', () => {
  // application should be running at port 3000
  cy.visit('localhost:3000')
  cy.contains('h1', 'todos')
  /* ==== Generated with Cypress Studio ==== */
  /* ==== End Cypress Studio ==== */
})

// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// remember to manually delete all items before running the test
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

it('adds two items', () => {
  // repeat twice
  //    get the input field
  //    type text and "enter"
  //    assert that the new Todo item
  //    has been added added to the list
  // cy.get(...).should('have.length', 2)
  addItem('Hello World')
  addItem('Hello World2')
  cy.get('li.todo').should('have.length', 2)
})

it('can mark an item as completed', () => {
  addItem('first')
  addItem('second')
  // marks the first item as completed
  cy.contains('li.todo', 'first').should('exist').find('.toggle').check()
  cy.contains('li.todo', 'first').should('have.class', 'completed')
  cy.contains('li.todo', 'second').should('not.have.class', 'completed')

  // adds a few items
  // marks the first item as completed
  // confirms the first item has the expected completed class
  // confirms the other items are still incomplete
})

it('can delete an item', () => {
  addItem('third')
  addItem('fourth')
  cy.contains('li.todo', 'third')
    .should('exist')
    .find('.destroy')
    .click({ force: true })
  cy.contains('li.todo', 'fourth').should('exist')
  cy.contains('li.todo', 'third').should('not.exist')

  // adds a few items
  // deletes the first item
  // use force: true because we don't want to hover
  // confirm the deleted item is gone from the dom
  // confirm the other item still exists
})

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    addItem(k.toString())
    // add an item
    // probably want to have a reusable function to add an item!
  }
  // check number of items
})

// it('adds item with random text', () => {
//   // use a helper function with Math.random()
//   // or Cypress._.random() to generate unique text label
//   // add such item
//   // and make sure it is visible and does not have class "completed"
// })

// it('starts with zero items', () => {
//   // check if the list is empty initially
//   //   find the selector for the individual TODO items
//   //   in the list
//   //   use cy.get(...) and it should have length of 0
//   //   https://on.cypress.io/get
// })

// it('does not allow adding blank todos', () => {
//   // https://on.cypress.io/catalog-of-events#App-Events
//   cy.on('uncaught:exception', () => {
//     // check e.message to match expected error text
//     // return false if you want to ignore the error
//   })

//   // try adding an item with just spaces
// })

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
