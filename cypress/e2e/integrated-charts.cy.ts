describe('Integrated Charts Tests', () => {
    [
        {name: 'Integrated Charts', path: 'packages/integrated-charts', license: true},
    ].forEach(({name, path, license}) => {
        it(`license message printed ${name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${path}`, {
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

        it(`column headers match ${name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${path}`);

            cy.get(".ag-header-cell-text")
                .should('have.length', 7)
                .then(elements => Cypress.$.makeArray(elements).map((el) => el.innerText))
                .should('deep.equal', ['Athlete', 'Age', 'Sport', 'Year', 'Gold', 'Silver', 'Bronze'])
        });

        it(`cell values match ${name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${path}`);

            cy.get(".ag-cell-value")
                .should('have.length', 119)
                .then(elements => Cypress.$.makeArray(elements).map((el) => el.innerText))
                .then(elements => elements.slice(0,7))
                .should('deep.equal', ['Laura Robson', '18', 'Tennis', '2012', '0', '1', '0'])
        })

        it(`charts-wrapper-present ${name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${path}`);

            cy.get('div#myChart').children("div")
                .should('have.class', 'ag-chart')
        });

        it(`canvas present and visible ${name}`, () => {
            cy.visit(`http://127.0.0.1:8080/${path}`);

            cy.get('.ag-chart-wrapper').children("canvas")
                .should('be.visible')

        });
    })
})
