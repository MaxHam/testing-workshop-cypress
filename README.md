In diesem Workshop werden wir eine Einführung ins E2E Web Testing mit Cypress.io geben. Wir werden lernen was E2E Testing ist und welche Ziele man damit erreichen möchte.

Wir werden also nicht jeden Aspekt von Cypress erforschen, sondern viel mehr anhand einer Beispiel Anwendung die ersten Schritte erklären und wichtige und nützliche Aspkete aufzeigen, sodass jeder in der Lage ist tiefer in E2E Testing mit diesem Framework einzutauchen. Die Beispiel Applikation ist von [TodoMVC](https://todomvc.com/) entnommen worden. 

## Vorkenntnisse:
- HTML (+CSS)
- Javascript
- Git
- REST (+Client)

## Benötigte Tools:
- IDE (VS Code)
- [Github Repo](https://github.com/MaxHam/testing-workshop-cypress)
- NodeJS
- Browser mit DevTools (Google Chrome)

## Vorbereitung:

- Node.js/npm installieren.
- Workshop-Repository clonen.
- npm-Abhängigkeiten für Cypress Workshop installieren.
  - Ìm Repository ausführen
  ```bash 
  $ npm install
  ``` 

- npm-Abhängigkeiten für Beispiel Applikation installieren.
  - Die Abhängigkeiten für die Beispiel Applikation sollten bereits durch obriges Kommando installiert sein, sonst  
   ```bash
   $ cd todomvc && npm install
   ```

- Starte Beispiel Applikation
 ```bash
 $ npm run start
 ``` 
- Prüfe ob die Applikation unter `http://localhost:3000/` läuft

- Überprüfen ob Cypress startet mit
 ```bash 
 $ npm run cy:open
 ```
- Es sollte sich automatisch der Test Runner von Cypress.io in einem Browserfenster öffnen


### Material
- [Workshop Repository](https://github.com/MaxHam/testing-workshop-cypress) (Wird spätestens am Tag des Workshops veröffentlicht)
- [Cypress.io Dokumentation](https://docs.cypress.io/)
- [Mocha Testing Library](https://mochajs.org/api/)
- Folien (später im [Repo](https://github.com/MaxHam/testing-workshop-cypress))




Repository wurde geforked von [Cypress.io Workshop](https://github.com/cypress-io/testing-workshop-cypress)