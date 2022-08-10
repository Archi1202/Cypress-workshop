/// <reference types="Cypress" />

describe('Buttons: Button actions', () => {
  before('Navigate to buttons page', () => {
    cy.visit('/buttons');
  });

  it('Check different button actions', () => {
    // Double click on button
    cy.get('#doubleClickBtn').dblclick();
    cy.contains('You have done a double click').should('be.visible');

    // Right-click on button
    cy.get('#rightClickBtn').rightclick();
    cy.contains('You have done a right click').should('be.visible');

    // Click on button
    cy.get('[class="btn btn-primary"]').then((buttons) => {
      cy.wrap(buttons).eq(2).click();
      cy.contains('You have done a dynamic click').should('be.visible');
    });
  });
});
