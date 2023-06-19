// describe('Grid Tests', () => {
//     [
//         {name: 'Charts Community', path: 'charts/charts-community', license: false},
//         // {name: 'Charts Enterprise', path: 'packages/charts-enterprise', license: true},
//     ].forEach(({name, path, license}) => {
//         it(`license message printed ${name}`, () => {
//             cy.visit(`http://127.0.0.1:8080/${path}`, {
//                 onBeforeLoad(win: any) {
//                     cy.spy(win.console, 'error').as('spyWinConsoleError');
//                 },
//             })
//
//             if (license) {
//                 // check for a couple of lines of the license key
//                 cy.get('@spyWinConsoleError').should('be.calledWith', '***************************************** AG Grid Enterprise License *******************************************');
//                 cy.get('@spyWinConsoleError').should('be.calledWith', '****************************************** License Key Not Found ***********************************************');
//
//                 // the entire license key message is 8 lines - any more or less and there is an issue
//                 cy.get('@spyWinConsoleError').should('have.callCount', 8)
//             } else {
//                 cy.get('@spyWinConsoleError').should('have.callCount', 0)
//             }
//         });
//
//         it(`charts-wrapper-present ${name}`, () => {
//             cy.visit(`http://127.0.0.1:8080/${path}`);
//
//             cy.get('div#myChart').children("div")
//                 .should('have.class', 'ag-chart-wrapper')
//         });
//
//         it(`canvas present and visible ${name}`, () => {
//             cy.visit(`http://127.0.0.1:8080/${path}`);
//
//             cy.get('div#myChart').children("div")
//                 .should('be.visible')
//         });
//     })
// })
