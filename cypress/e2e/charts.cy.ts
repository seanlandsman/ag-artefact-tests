describe('Grid Tests', () => {
    [
        {name: 'Charts Community', path: 'packages/charts-community', license: false},
        // {name: 'Charts Enterprise', path: 'packages/charts-enterprise', license: true},
    ].forEach(testConfig => {
        it(`license message printed ${testConfig.name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${testConfig.path}`, {
                onBeforeLoad(win: any) {
                    cy.spy(win.console, 'error').as('spyWinConsoleError');
                },
            })

            if(testConfig.license) {
                // check for a couple of lines of the license key
                cy.get('@spyWinConsoleError').should('be.calledWith', '***************************************** AG Grid Enterprise License *******************************************');
                cy.get('@spyWinConsoleError').should('be.calledWith', '****************************************** License Key Not Found ***********************************************');

                // the entire license key message is 8 lines - any more or less and there is an issue
                cy.get('@spyWinConsoleError').should('have.callCount', 8)
            }
        });

        it(`charts-wrapper-present ${testConfig.name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${testConfig.path}`);

            cy.get('div#myChart').children("div")
                .should('have.class', 'ag-chart-wrapper')
        });

        it(`canvas present and visible ${testConfig.name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${testConfig.path}`);

            cy.get('div#myChart').children("div")
                .should('be.visible')
        });
    })
})
