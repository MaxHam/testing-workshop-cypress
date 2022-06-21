/// <reference types="cypress" />
//
// Vor den folgenden Tests werden wir die Daten nicht zzurücksetzen, um zu überprüfen, dass die Tests fehlschlagen. 
// Wenn du keine Todo Items hast, füge welche vor dem Ausführen der Tests hinzu.
// note, we are not resetting the server before each test
// and we want to confirm that IF the application has items already
// (for example add them manually using the browser localhost:3000)
// then these tests fail!
//
// see https://on.cypress.io/intercept

/* eslint-disable no-unused-vars */

it('starts with zero items (waits)', () => {
  cy.visit('/')
  // Warte 1 Sekunde
  // Dann überprüfe die Anzahl an Todo Items
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items', () => {
  // Spionier die Route `GET /todos` aus
  // mit cy.intercept(...).as(<alias name>)
  // Dann besuche die Seite
  cy.visit('/')
  // Warte auf `GET /todos` Route
  // mit "@<alias name>" string
  // Dann überprüfe die DOM
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (stubbed response)', () => {
  // Stub `GET /todos` mit einem leeren Array([])
  // Speichere den Stub als Alias
  // Dann besuche die Website
  cy.visit('/')

  // Warte auf den Route Alias
  // Dann überprüfe die DOM
  cy.get('li.todo').should('have.length', 0)
})

it('starts with zero items (fixture)', () => {
  // Stub `GET /todos` mit der Fixture "empty-list"
  // Dann besuche die Seite
  cy.visit('/')
  

  // Warte auf den Route Alias
  // Dann überprüfe die DOM
  cy.get('li.todo').should('have.length', 0)

})

it('loads several items from a fixture', () => {
  // Stub `GET /todos` mit der Fixture "two-items"
  // Dann besuche die Seite
  cy.visit('/')
  
  // Dann überprüfe die DOM: ein paar Todo Items sollten abgehakt sein
})


it('shows loading element', () => {
  // Verzögere den XHR Request auf "/todos" um 2 Sekunden
  // und sende als Response ein leeres Array
  cy.visit('/')

  // Überprüfe ob eine Lade Element angezeigt wird
  // Warte bis der XHR Request fertig ist
  // Überprüfe ob das Lade Element nicht mehr angezeigt wird
})
