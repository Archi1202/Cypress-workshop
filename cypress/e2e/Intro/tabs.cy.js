/// <reference types="Cypress" />

describe('Locators: Get elements from Tabs section'),
  () => {
    beforeEach('Navigate to test tabs section', () => {
      cy.visit('https://demoqa.com/tabs');
    });
    it('Check tabs', () => {
      // By id
      cy.get('#demo-tab-what');

      // By tag name
      // This is not a html tag name, it does not return anything
      // changed to the tag name nav
      cy.get('nav');

      // By attribute name
      // This is not attribute name
      // changed to the attribute name
      cy.get('aria-controls');

      // By class value value
      // This is not attribute name and value. You also have only one closed bracket, you haven't opened it anytwhere
      // Corrected
      cy.get('[class="nav-item nav-link disabled"]');
    });
  };
