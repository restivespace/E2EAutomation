// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// In cypress/support/commands.js

Cypress.Commands.add('highlight', { prevSubject: 'element' }, (subject, options = {}) => {
    const { duration = 500, highlightStyles = {} } = options;
    const $el = subject;
  
    const originalStyles = {
      backgroundColor: $el.css('background-color'),
      color: $el.css('color'),
      fontWeight: $el.css('font-weight'),
      border: $el.css('border'),
      padding: $el.css('padding')
    };
  
    $el.css({
      'background-color': highlightStyles.backgroundColor || 'yellow',
    //   'color': highlightStyles.color || 'red',
    //   'font-weight': highlightStyles.fontWeight || 'bold',
    //   'border': highlightStyles.border || '2px solid red',
    //   'padding': highlightStyles.padding || '2px'
    });
  
    cy.wait(duration).then(() => {
      $el.css(originalStyles);
    });
  });
  