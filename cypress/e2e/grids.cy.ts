describe('modules - angular', () => {
  [
    {name: 'Modules: Angular', path: 'modules/angular/dist/my-app/'},
    {name: 'Packages: Angular', path: 'packages/angular/dist/my-app/'}
  ].forEach(testConfig => {
    it(`column headers match ${testConfig.name}`, () => {
      cy.visit(`http://127.0.0.1:8080/${testConfig.path}`);

      cy.get(".ag-header-cell-text")
          .should('have.length', 3)
          .then(elements => Cypress.$.makeArray(elements).map((el) => el.innerText))
          .should('deep.equal', ['Make', 'Model', 'Price'])
    });

    it(`cell values match ${testConfig.name}`, () => {
      cy.visit(`http://127.0.0.1:8080/${testConfig.path}`);

      cy.get(".ag-cell-value")
          .should('have.length', 9)
          .then(elements => Cypress.$.makeArray(elements).map((el) => el.innerText))
          .should('deep.equal', [
            'Toyota', 'Celica', '35000',
            'Ford', 'Mondeo', '32000',
            'Porsche', 'Boxster', '72000'
          ])
    });
  })
})
