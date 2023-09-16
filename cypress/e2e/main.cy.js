describe('Main Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport('iphone-8');
  });
  it('Test for functional nav bar', () => {
    // Should exist
    cy.get('[data-test="nav"]').should('exist');

    // Menu Clicking
    cy.get('[data-test="menu-btn"]').as('menu-btn');
    cy.get('[data-test="menu"]').as('menu');

    // Menu should not initially exist
    cy.get('@menu-btn').should('exist');
    cy.get('@menu').should('be.hidden');

    // After click, menu should exist
    cy.get('@menu-btn').click();
    cy.get('@menu').should('not.be.hidden');
    cy.get('@menu').within(() => {
      cy.get('a').should('have.length', 5);
    });

    // Click again to hide menu
    cy.get('@menu-btn').click();
    cy.get('@menu').should('be.hidden');
  });
});
