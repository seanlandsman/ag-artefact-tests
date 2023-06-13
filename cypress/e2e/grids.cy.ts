describe('Grid Tests', () => {
    [
        {name: 'Modules: Angular', path: 'modules/angular/dist/my-app/'},
        // {name: 'Packages: Angular', path: 'packages/angular/dist/my-app/'},
        {name: 'Modules: React', path: 'modules/react/build/'},
        {name: 'Packages: React', path: 'packages/react/build/'},
        {name: 'Modules: Webpack', path: 'modules/webpack-ts/dist/'},
        {name: 'Packages: Webpack', path: 'packages/webpack-ts/dist/'},
    ].forEach(testConfig => {
        it(`license message printed ${testConfig.name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${testConfig.path}`, {
                onBeforeLoad(win: any) {
                    cy.spy(win.console, 'error').as('spyWinConsoleError');
                },
            })

            // check for a couple of lines of the license key
            cy.get('@spyWinConsoleError').should('be.calledWith', '***************************************** AG Grid Enterprise License *******************************************');
            cy.get('@spyWinConsoleError').should('be.calledWith', '****************************************** License Key Not Found ***********************************************');

            // the entire license key message is 8 lines - any more or less and there is an issue
            cy.get('@spyWinConsoleError').should('have.callCount', 8)
        });

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
