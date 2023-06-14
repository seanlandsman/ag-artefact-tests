describe('Grid Tests', () => {
    [
        {name: 'Modules: Angular Community', path: 'modules/angular-community/dist/my-app/', license: false},
        {name: 'Modules: Angular Enterprise', path: 'modules/angular-enterprise/dist/my-app/', license: true},
        {name: 'Modules: React Community', path: 'modules/react-community/build/', license: false},
        {name: 'Modules: React Enterprise', path: 'modules/react-enterprise/build/', license: true},
        {name: 'Modules: Webpack Community', path: 'modules/webpack-ts-community/dist/', license: false},
        {name: 'Modules: Webpack Enterprise', path: 'modules/webpack-ts-enterprise/dist/', license: true},
        {name: 'Packages: Vanilla Community', path: 'packages/vanilla/community.html', license: false},
        {name: 'Packages: Vanilla Enterprise', path: 'packages/vanilla/enterprise.html', license: true},
        {name: 'Packages: Angular Community', path: 'packages/angular-community/dist/my-app/', license: false},
        {name: 'Packages: Angular Enterprise', path: 'packages/angular-enterprise/dist/my-app/', license: true},
        {name: 'Packages: React Community', path: 'packages/react-community/build/', license: false},
        {name: 'Packages: React Enterprise', path: 'packages/react-enterprise/build/', license: true},
        {name: 'Packages: Webpack Community', path: 'packages/webpack-ts-community/dist/', license: false},
        {name: 'Packages: Webpack Enterprise', path: 'packages/webpack-ts-enterprise/dist/', license: true},
        {name: 'ESM Community Package', path: 'esm/esm/communityPackageEsm.html', license: false},
        {name: 'ESM Enterprise Package', path: 'esm/esm/enterprisePackageEsm.html', license: true},
    ].forEach(({name, path, license}) => {
        it(`license message ${license ? 'printed' : 'not shown'} ${name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${path}`, {
                onBeforeLoad(win: any) {
                    cy.spy(win.console, 'error').as('spyWinConsoleError');
                },
            })

            if(license) {
                // check for a couple of lines of the license key
                cy.get('@spyWinConsoleError').should('be.calledWith', '***************************************** AG Grid Enterprise License *******************************************');
                cy.get('@spyWinConsoleError').should('be.calledWith', '****************************************** License Key Not Found ***********************************************');

                // the entire license key message is 8 lines - any more or less and there is an issue
                cy.get('@spyWinConsoleError').should('have.callCount', 8)
            } else {
                cy.get('@spyWinConsoleError').should('have.callCount', 0)
            }
        });

        it(`column headers match ${name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${path}`);

            cy.get(".ag-header-cell-text")
                .should('have.length', 3)
                .then(elements => Cypress.$.makeArray(elements).map((el) => el.innerText))
                .should('deep.equal', ['Make', 'Model', 'Price'])
        });

        it(`cell values match ${name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${path}`);

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
