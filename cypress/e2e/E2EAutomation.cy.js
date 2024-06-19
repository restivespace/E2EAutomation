describe('E2E Automation', () => {
  const loginEmail = 'restivespace+test@gmail.com';
  const loginPassword = 'test123';
  // This will run before each test case
  beforeEach(() => {
    // Navigate to homepage
    cy.visit('https://www.techinasia.com/'); // Adjust the URL as necessary
  });
  
  it('Assert the title', () => {
    cy.get("h1").contains("You look like someone who appreciates quality journalism.").highlight();
  })

  it('Assert the Menu', () => {
    const dataCyValues = [
      'News-nav-link',
      'Jobs-nav-link',
      'Companies-nav-link',
      'Events-nav-link',
      'About-nav-link',
      'Advertise-nav-link',
    ];

    // Iterate over each data-cy value
    dataCyValues.forEach((dataCy) => {
      // Use cy.get() with { timeout: 10000 } to extend the waiting time
      cy.get(`[data-cy="${dataCy}"]`, { timeout: 10000 })
        .should('be.visible')
        .highlight();
    });
  })

  it('should check that the Upcoming Events container and its URLs are visible', () => {
    
    // Select the Upcoming Events container
    cy.get('.conference-reminder').should('be.visible').highlight();

    // Count the number of <a> elements within the Upcoming Events container
    // cy.get('.conference-reminder a').should('have.length', 3);
    cy.get('.jsx-3534304846.description').should('have.length', 3);

    // Assert the visibility of each <a> element
    // cy.get('.conference-reminder a').each(($el) => {
    cy.get('.jsx-3534304846.description').each(($el) => {
      cy.wrap($el).should('be.visible').highlight();  
    });
  });

  it('should check that the Latest Stories header and at least 5 post items are visible', () => {
    // Assert the visibility of the Latest Stories header element
    cy.get('.jsx-4016345616.header').should('be.visible').highlight();

    // Count the number of post-item elements and assert that there are at least 5
    cy.get('[data-cy="post-item"]').should('have.length.at.least', 5);

    // Assert the visibility of each post-item element
    cy.get('[data-cy="post-item"]').each(($el) => {
      cy.wrap($el).should('be.visible').highlight();
    });
  });

  it('should check that Premium Content is visible and has at least 3 list items', () => {
    // Assert the visibility of the Premium Content section
    cy.get('.jsx-3337749519.container.vertical').should('be.visible').highlight();

    // Count the number of <li> elements within the Premium Content section and assert there are at least 3
    cy.get('.jsx-3337749519.container.vertical ul li').should('have.length.at.least', 3);

    // Assert the visibility of each <li> element
    cy.get('.jsx-3337749519.container.vertical ul li').each(($el) => {
      cy.wrap($el).should('be.visible').highlight();
    });
  });

  it('should check that Latest Jobs is visible and has at least one job item', () => {
    // Assert the visibility of the Latest Jobs section
    cy.get('[data-cy="latest-jobs"]').scrollIntoView().should('be.visible');

    // Count the number of job items and assert that there is at least one
    cy.get('[data-cy="latest-jobs"] .jsx-2773311516.container').should('have.length.at.least', 1);

    // Scroll each job item into view before asserting visibility
    cy.get('[data-cy="latest-jobs"] .jsx-2773311516.container').each(($el) => {
      cy.wrap($el).scrollIntoView().should('be.visible');
    });
  });

  it('should navigate to the login page when clicking on the Log In link and fill in login credentials', () => {
    // Click on the Log In link
    cy.get('[data-cy="login-link"]').click();

    // Assert that the URL changes to the login page
    cy.url().should('include', '/login');

    // Fill in the email address
    cy.get('input[type="email"][placeholder="Email Address"]').type(loginEmail);
    // cy.get('input[type="email"]').should('be.visible');

    // Fill in the password
    cy.get('input[type="password"][placeholder="Password"]').type(loginPassword);
    // cy.get('input[type="password"]').should('be.visible');

    // Click on the login button
    cy.get('[data-cy="login-btn"]').click();

    // cy.get(':nth-child(2) > :nth-child(1) > .jsx-3933848426').should("exist")

    // Click on the Account settings menu
    cy.get(':nth-child(2) > :nth-child(1) > .jsx-3933848426').click();
    
    cy.get('.dropdown').contains('Account settings').click({waitForAnimations:false});

    // Assert that the URL changes to the account settings page
    cy.url().should('include', '/profile/settings');

     // Assert that the email listed matches the login email
     cy.get('[data-cy="email"]').should('contain', loginEmail).highlight().end();

  });
})