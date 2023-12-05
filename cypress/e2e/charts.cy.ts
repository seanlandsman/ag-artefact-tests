 describe('Grid Tests', () => {     [
         {name: 'Charts Community Vanilla', path: 'charts/vanilla/community.html', license: false},
         {name: 'Grid Enterprise With Charts', path: 'charts/vanilla/grid-enterprise-with-charts.html', license: true, grid: true},
         {name: 'Charts Community', path: 'charts/charts-community', license: false},
         {name: 'Charts Enterprise', path: 'charts/charts-enterprise', license: true},
         {name: 'Charts Angular Community', path: 'charts/angular-community/dist/my-app', license: false},
         {name: 'Charts Angular Enterprise', path: 'charts/angular-enterprise/dist/my-app', license: false},
         {name: 'Charts React Community', path: 'charts/react-community/build', license: false},
         {name: 'Charts React Enterprise', path: 'charts/react-enterprise/build', license: false},
         {name: 'Charts Webpack Community', path: 'charts/webpack-ts-community/dist', license: false},
         {name: 'Charts Webpack Enterprise', path: 'charts/webpack-ts-enterprise/dist', license: true},
     ].forEach(({name, path, license, grid=false}) => {
        it(`license message printed ${name}`, () => {
            cy.visit(`http://127.0.0.1:8085/${path}`, {
                onBeforeLoad(win: any) {
                    cy.spy(win.console, 'error').as('spyWinConsoleError');
                },
            })

            if (license) {
                // check for a couple of lines of the license key
                if(grid) {
                    cy.get('@spyWinConsoleError').should('be.calledWith', '***************************************** AG Grid Enterprise License *******************************************');
                } else {
                    cy.get('@spyWinConsoleError').should('be.calledWith', '***************************************** AG Charts Enterprise License *******************************************');
                }
                cy.get('@spyWinConsoleError').should('be.calledWith', '****************************************** License Key Not Found ***********************************************');

                // the entire license key message is 8 lines - any more or less and there is an issue
                cy.get('@spyWinConsoleError').should('have.callCount', 8)
            } else {
                cy.get('@spyWinConsoleError').should('have.callCount', 0)
            }
        });

        it(`charts-wrapper-present ${name}`, () => {
            cy.visit(`http://127.0.0.1:8085/${path}`);

            cy.get('div[class^="ag-chart-wrapper"]').should('be.visible')
        });

        it(`canvas present and visible ${name}`, () => {
            cy.visit(`http://127.0.0.1:8085/${path}`);

            cy.get('div[class^="ag-chart-wrapper"]').children("canvas")
                .should('be.visible')
        });

        if(grid) {
            it(`column headers match ${name}`, () => {
                cy.visit(`http://127.0.0.1:8085/${path}`);

                cy.get(".ag-header-cell-text")
                    .should('have.length', 3)
                    .then(elements => Cypress.$.makeArray(elements).map((el) => el.innerText))
                    .should('deep.equal', ['Make', 'Model', 'Price'])
            });

            it(`cell values match ${name}`, () => {
                cy.visit(`http://127.0.0.1:8085/${path}`);

                cy.get(".ag-cell-value")
                    .should('have.length', 9)
                    .then(elements => Cypress.$.makeArray(elements).map((el) => el.innerText))
                    .should('deep.equal', [
                        'Toyota', 'Celica', '35000',
                        'Ford', 'Mondeo', '32000',
                        'Porsche', 'Boxster', '72000'
                    ])
            });
        }
    })
})
