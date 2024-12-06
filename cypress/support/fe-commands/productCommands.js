Cypress.Commands.add('fillProductForm',  (name, price, desc, qt) => {
    cy.get('[data-testid="nome"]').type(name);
    cy.get('[data-testid="preco"]').type(price);
    cy.get('[data-testid="descricao"]').type(desc);
    cy.get('[data-testid="quantity"]').type(qt);
    cy.get('[data-testid="cadastarProdutos"]').click()
} );