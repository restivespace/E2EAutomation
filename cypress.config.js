const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reportPageTitle: 'E2E Suite',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    screenshotOnRunFailure: true,
    video: true,
  },
});
