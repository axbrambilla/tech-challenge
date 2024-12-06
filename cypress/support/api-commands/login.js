Cypress.Commands.add('apiLogin', (username, password) => {
    const body = {
        email: username,
        password: password
    }

    cy.request('POST', '/login', body)
        .then((response) => {
            expect(response.status).to.eq(200)
        })
} );