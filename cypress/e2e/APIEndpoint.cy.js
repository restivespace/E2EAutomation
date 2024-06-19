// cypress/e2e/api_spec.js

describe('API Testing with Cypress', () => {
    const sidebarUrl = 'https://www.techinasia.com/wp-json/techinasia/3.0/meta/navigational/sidebar/upcoming-events';
    const postsUrl = 'https://www.techinasia.com/wp-json/techinasia/2.0/posts?page=1&per_page=10';
  
    it('Assert API response', () => {
      cy.request(sidebarUrl).then((response) => {
        expect(response.status).to.eq(200);   
      });
    });

    it('Assert that the response has 3 objects', () => {
      cy.request(sidebarUrl).then((response) => {      
        // Assert that it has 3 objects
        expect(response.body).to.have.length(3);
        // console.log(response.body[0].position);
      });
    });

    it('Assert position values', () => {
      cy.request(sidebarUrl).then((response) => {      
        // Assert position values
        expect(response.body[0].position).to.eq(0);
        expect(response.body[1].position).to.eq(1);
        expect(response.body[2].position).to.eq(2);
      });
    });

    it('Assert title, home_url, and article_url are not empty and URLs start with "https://', () => {
      cy.request(sidebarUrl).then((response) => {      
        // Assert title, home_url, and article_url are not empty and URLs start with "https://"
        response.body.forEach((event) => {
          expect(event.title).to.not.be.empty;
          expect(event.home_url).to.not.be.empty;
          expect(event.home_url).to.match(/^https:\/\//);
          expect(event.article_url).to.not.be.empty;
          expect(event.article_url).to.match(/^https:\/\//);
        });
      });
    });

  
    it('Assert total is greater than 1', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;
  
        // Assert total is greater than 1
        expect(total).to.be.greaterThan(1);

      });
    });

    it('Assert per_page is 10', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;
  
        // Assert per_page is 10
        expect(per_page).to.eq(10);
      });
    });

    it('Assert current_page is 1', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;
  
        // Assert current_page is 1
        expect(current_page).to.eq(1);
      });
    });

    it('Assert total_pages is greater than 50000', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;

        // Assert total_pages is greater than 50000
        expect(total_pages).to.be.greaterThan(50000);
  
        // Assert posts array contains 10 objects
        expect(posts).to.have.length(10);
  
        // Assert required fields are not empty for each post
        posts.forEach((post) => {
          expect(post.author).to.not.be.empty;
          expect(post.slug).to.not.be.empty;
          expect(post.content).to.not.be.empty;
          expect(post.title).to.not.be.empty;
          expect(post.status).to.not.be.empty;
          expect(post.type).to.not.be.empty;
        });
      });
    });

    it('Assert posts array contains 10 objects', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;

        // Assert posts array contains 10 objects
        expect(posts).to.have.length(10);  
      });
    });

    it('Assert required fields are not empty for each post', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;

        // Assert required fields are not empty for each post
        posts.forEach((post) => {
          expect(post.author).to.not.be.empty;
          expect(post.slug).to.not.be.empty;
          expect(post.content).to.not.be.empty;
          expect(post.title).to.not.be.empty;
          expect(post.status).to.not.be.empty;
          expect(post.type).to.not.be.empty;
        });
      });
    });

  });

  
  