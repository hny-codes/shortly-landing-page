describe('Main Test', { retries: 3 }, () => {
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

    // Desktop View
    cy.viewport(1000, 660);
    cy.get('@menu-btn').should('be.hidden');
    cy.get('@menu').should('be.hidden');

    cy.get('[data-test="desktop-link"]').should('have.length', 5);
  });

  it.only('Hero Component', () => {
    const title = 'More than just shorter links';
    const subtitle =
      'Build your brand\'s recognition and get detailed insights on how your links are performing.';

    // Should exist
    cy.get('[data-test="hero"]').should('exist');

    cy.get('[data-test="hero-title"]').contains(title);
    cy.get('[data-test="hero-subtitle"]').contains(subtitle);

    cy.get('[data-test="hero-btn"]').should('exist');
  });
});
