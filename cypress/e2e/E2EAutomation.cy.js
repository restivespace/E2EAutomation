describe('E2E Automation', () => {
  // This will run before each test case
  beforeEach(() => {
    // Navigate to homepage
    cy.visit('https://www.techinasia.com/'); // Adjust the URL as necessary
  });
  
  it('Assert the title', () => {
    cy.get("h1").contains("You look like someone who appreciates quality journalism.").then(($h1) => {
      // Apply CSS styles to highlight the text
      $h1.css({
        'background-color': 'yellow', // Highlight background
      });
      cy.wait(500).then(() => {
        $h1.css(originalStyles);
      });
    });
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
        .then(($el) => {
          const originalStyles = {
            backgroundColor: $el.css('background-color'),
          };

          $el.css({
            'background-color': 'yellow',           
          });

          cy.wait(500).then(() => {
            $el.css(originalStyles);
          });
        });
    });
  })
})