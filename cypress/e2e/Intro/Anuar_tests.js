/// <reference types="Cypress" />

    describe('Locators: Get elements from Tabs section', () => {
        beforeEach('Navigate to test tabs section', () => {
          cy.visit('/tabs');
        });
      
        it('Check tabs', () => {
          // By id
          cy.get('#demo-tab-what');
      
          // By tag name
          cy.get('origin');
      
          // By attribute name
          cy.get('demo-tabpane-use');
      
          // By attribute name and value
          cy.get('nav-item nav-link disabled"]');
      
                

        });
      
        it('Check finding elements by travelling through DOM', () => {
          // Travel through DOM to find Submit button
          cy.get('#demo-tab-what').parents('form').find('tab').should('contain', 'What');
        });
      });
    