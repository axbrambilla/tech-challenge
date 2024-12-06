const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://front.serverest.dev/',
    specPattern: 'cypress/e2e/fe-tests/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js'
  },
});
