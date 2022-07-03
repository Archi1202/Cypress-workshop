/// <reference types="Cypress" />

describe('Auth: Login', () => {
    before(() => {
      // runs once before all tests in the block (before all "it" blocks)
    });
  
    beforeEach('Clear Cookies', () => {
      // runs before each test in the block (before each "it" blocks)
      cy.clearCookies();
    });
  
    after('Log something after all test runs', () => {
      // runs once after all tests in the block (after all "it" blocks)
      cy.log('we completed this test run!');
    });
  
    afterEach(() => {
      // runs after each test in the block (after each "it" blocks)
    });
  
    it('Check if user can login with valid credentials', () => {
      cy.visit('/automation-practice-form');
      expect(true).to.equal(true);
    });
  
    it('Check if user can login with invalid credentials', () => {
      expect(true).to.equal(true);
    });
  
    xit('Check if user can login without entering any credentials', () => {
      expect(true).to.equal(true);
    });
  });