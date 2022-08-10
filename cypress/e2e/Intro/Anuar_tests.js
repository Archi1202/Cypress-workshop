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
          // Travel through DOM to find What tab
          cy.get('#demo-tab-what').parents('form').find('tab').should('contain', 'What');
        });
         });

         it('Check different types of assetions', () => {
          // Should assertion
          cy.get('[role="tab"]')
            .should('contain', 'What')
            .and('data-rb-event-key', 'aria-controls');
      
          // Expect assertion
          cy.get('[id="demo-tab-origin"]').then((element) => {
            expect(aria-selected).to.have.boolen('true');
            expect(element).to.have.class('nav-item nav-link active');
          });
        });