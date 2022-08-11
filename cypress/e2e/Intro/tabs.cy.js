/// <reference types="Cypress" />

describe('Locators: Get elements from Tabs section', () => {
  beforeEach('Navigate to test tabs section', () => {
    cy.visit('https://demoqa.com/tabs');
  });
  it('Check tabs', () => {
    // By id
    cy.get('#demo-tab-what').should('have.class', 'nav-item nav-link active');

    // By tag name
    // This is not a html tag name, it does not return anything
    // changed to the tag name nav
    cy.get('nav').should('have.class', 'nav nav-tabs');

    // By attribute name
    // This is not attribute name
    // changed to the attribute name
    cy.get('#demo-tab-what').then((element) => {
      expect(element).to.have.text('What');
      expect(element).to.have.class('nav-item nav-link active');
    });
    cy.get('#demo-tab-more').then((element1) => {
      expect(element1).to.have.text('More');
    });
  });
});
