describe('Register and List Products Suite', () => {
    beforeEach(() => {
        cy.login('fulano@fulano.com', 'fulano')
        cy.url().should('include', '/admin/home');
    });

    it('Register a new product', () => {
        cy.visit('/admin/cadastrarprodutos')
        cy.fillProductForm(
            'Novo Produto',
            '10',
            'Este é um produto',
            '500'
        ) 
        cy.url().should('include', 'admin/listarprodutos')
        cy.contains('td', 'Novo Produto').scrollIntoView();
    });

    after(() => {
        /* 
            Cleanup of created products. 
            Normally, this would be done via API or directly in the database. 
        */
    });
});