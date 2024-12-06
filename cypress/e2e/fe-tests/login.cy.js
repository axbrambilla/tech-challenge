describe('Login Suite', () => {
    it('Should login successfuly', () => {
        cy.login('fulano@fulano.com', 'fulano')
        cy.url().should('include', '/admin/home');
    });

    it('Should not login with wrong credentials', () => {
        cy.login('wronguser@email.com', 'wrongpw')
        cy.url().should('include', '/login');
        cy.get('[class = "alert alert-secondary alert-dismissible"]').should('contain', 'Email e/ou senha inválidos');
    });
});