describe('Grid Tests', () => {
    [
        { name: 'Jira:AG-8780', path: 'modules/webpack-ts-enterprise-jira/dist/' },

    ].forEach(({ name, path }) => {

        it(`grid spec ${name}`, () => {
            cy.visit(`http://127.0.0.1:8085/${path}`);

            // Click to expand first detail row
            cy.get('.ag-cell-wrapper > .ag-group-contracted').first().click();

            // Will only have Status value is StatusBarModule is passed through to detail grid even though
            // it is registered in the main grid not globally
            cy.get('.ag-status-name-value-value').should('have.text', '24');

        });

    })
})
