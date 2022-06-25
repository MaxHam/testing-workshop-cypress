/// <reference types="cypress" />

// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// Lösche in der Applikation selber alle Items bevor du den Test startest.
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

/**
 * https://on.cypress.io/type
 * https://on.cypress.io/check
 * https://on.cypress.io/should
 * https://on.cypress.io/assertions
 * 
 * Tipp: Wie bestätigt ihr die Eingabe eines Todo Items ?
 */



it('loads', () => {
  // Applikation läuft unter Port 3000
  cy.visit('localhost:3000')
  cy.contains('h1', 'todos')
})

it('adds two items', () => {
  // Erstelle zwei Items
  //    Finde das Input Element(get)
  //    Füge einen Text ein und bestätige diesen mit Enter(type)
  //    Überprüfe ob das neue Item auch wirklich erstellt wurde (contains, should)
})

it('can mark an item as completed', () => {
  // Erstelle zwei Items
  //    Finde das Input Element(get)
  //    Füge einen Text ein und bestätige diesen mit Enter(type)
  // Markiere das erste Item als erledigt
  // Überprüfe ob das erste Item abgehakt wurde (className = completed)
  // Überprüfe, dass die anderen Items noch nicht abgehakt wurden
})

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    // Füge ein Item hinzu
    // Hier macht es Sinn die Aktion in eine Funktion auszulagern !
  }
  // Überprüfe die Anzahl an hinzugefügten Items
})
