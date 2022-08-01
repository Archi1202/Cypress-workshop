/// <reference types="Cypress" />

describe('Locators: Get elements by different locator strategies', () => {
    beforeEach('Navigate to test page', () => {
      cy.visit('/automation-practice-form');
    });
  
    it('Check different locators strategies', () => {
      // By id
      cy.get('#firstName');
  
      // By tag name
      cy.get('input');
  
      // By attribute name
      cy.get('[placeholder]');
  
      // By attribute name and value
      cy.get('[placeholder="First Name"]');
  
      // By class name
      cy.get('.col-md-3');
  
      // By class value
      cy.get('[class="mr-sm-2 form-control"]');
  
      // By tag name and attribute with value
      cy.get('input[placeholder="First Name"]');
  
      // By different attributes
      cy.get('[placeholder="First Name"][id="firstName"]');
  
      // By tag name, attribute with value, ID and class name
      cy.get('input[placeholder="First Name"]#firstName.form-control');
  
      // // Recommended way - unique attribute + value
      // cy.get('[data-test="first_name"]');
    });
  
    it('Check finding elements by travelling through DOM', () => {
      // Travel through DOM to find Submit button
      cy.get('#firstName').parents('form').find('button').should('contain', 'Submit');
    });
  });

  it('Check different types of assetions', () => {
    // Should assertion
    cy.get('[for="gender-radio-2"]')
      .should('contain', 'Female')
      .and('have.class', 'custom-control-label');

    // Expect assertion
    cy.get('[for="gender-radio-2"]').then((element) => {
      expect(element).to.have.text('Female');
      expect(element).to.have.class('custom-control-label');
    });
  });