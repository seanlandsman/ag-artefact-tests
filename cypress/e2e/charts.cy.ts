 describe('Grid Tests', () => {     [
         {name: 'Charts Community', path: 'charts/charts-community', license: false},
         {name: 'Charts Enterprise', path: 'charts/charts-enterprise', license: true},
         {name: 'Charts Angular Community', path: 'charts/angular-community/dist/my-app', license: false},
         {name: 'Charts Angular Enterprise', path: 'charts/angular-enterprise/dist/my-app', license: false}, // spl - there's a bug where fw wrappers arent' displaying license message
         {name: 'Charts React Community', path: 'charts/react-community/build', license: false},
         {name: 'Charts React Enterprise', path: 'charts/react-enterprise/build', license: false},  // spl - there's a bug where fw wrappers arent' displaying license message
         {name: 'Charts Webpack Community', path: 'charts/webpack-ts-community/dist', license: false},
         {name: 'Charts Webpack Enterprise', path: 'charts/webpack-ts-enterprise/dist', license: true},
     ].forEach(({name, path, license}) => {
        it(`license message printed ${name}`, () => {
            cy.visit(`http://127.0.0.1:8085/${path}`, {
                onBeforeLoad(win: any) {
                    cy.spy(win.console, 'error').as('spyWinConsoleError');
                },
            })

            if (license) {
                // check for a couple of lines of the license key
                cy.get('@spyWinConsoleError').should('be.calledWith', '***************************************** AG Grid Enterprise License *******************************************');
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
    })
})
