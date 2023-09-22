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

  it('Hero Component', () => {
    const title = 'More than just shorter links';
    const subtitle =
      "Build your brand's recognition and get detailed insights on how your links are performing.";

    // Should exist
    cy.get('[data-test="hero"]').should('exist');

    cy.get('[data-test="hero-title"]').contains(title);
    cy.get('[data-test="hero-subtitle"]').contains(subtitle);

    cy.get('[data-test="hero-btn"]').should('exist');
  });

  it('Link Box', () => {
    const link = 'https://astro.build/';
    cy.get('[data-test="link-input"]').as('input');
    cy.get('[data-test="shorten-btn"]').as('btn');
    cy.get('[data-test="link-list"]').as('list');

    // No errors should be valid upon initial launch
    cy.get('[data-test="error"]').should('not.exist');

    // No shorten links upon initial launch
    cy.get('[data-test="list-item"]').should('not.exist');

    // Test for empty input
    cy.get('@btn').click();
    cy.get('[data-test="error"]').should('exist');

    cy.reload();

    // Test for invalid link
    cy.get('@input').type('hps:/astro./');
    cy.get('@btn').click();
    cy.get('[data-test="error"]').should('exist');

    // Test for valid link
    cy.get('@input').clear().type(link);
    cy.get('[data-test="error"]').should('not.exist');
    cy.get('@btn').click();

    cy.get('[data-test="list-item"]').should('exist');
  });

  it('Statistic Section Test', () => {
    const title = 'Advanced Statistics';
    const subtitle =
      'Track how your links are performing across the web with our advanced statistics dashboard.';

    // Make sure it exists on DOM
    cy.get('[data-test="statistics"]').should('exist');
    cy.get('[data-test="statistic-title"]').contains(title);
    cy.get('[data-test="statistic-subtitle"]').contains(subtitle);

    // Make sure there are 3 statistic card items
    cy.get('[data-test="stat-list"]').children().should('have.length', 3);
  });

  it('Banner Test', () => {
    cy.get('[data-test="banner"]').should('exist');
    cy.get('[data-test="banner"]').within(() => {
      cy.get('h2').contains('Boost your links today');
      cy.get('button').contains('Get Started');
    });
  });

  it.only('Footer Test', () => {
    cy.get('footer').should('exist');

    // Check link count
    cy.get('[data-test="features"]').within(() => {
      cy.get('a').should('have.length', 3)
    })

    cy.get('[data-test="resources"]').within(() => {
      cy.get('a').should('have.length', 3);
    });

    cy.get('[data-test="company"]').within(() => {
      cy.get('a').should('have.length', 4);
    });

    cy.get('[data-test="social"]').within(() => {
      cy.get('a').should('have.length', 4);
    });

  })
});
