/*
Login and gives the option to save session 
*/
Cypress.Commands.add('login', (username, password, saveSession = false) => {
  
    const loginSteps = () => {
        cy.visit('/')
        cy.get('[data-testid="email"]').type(username);
        cy.get('[data-testid="senha"]').type(password);
        cy.get('[data-testid="entrar"]').click();
    };

    saveSession ? cy.session(username, loginSteps) : loginSteps()

} );