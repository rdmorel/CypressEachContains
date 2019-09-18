describe('Each+Contains Bug', () => {
  it('test', () => {
      cy.visit('https://www.google.com/');
      cy.get('input[type="submit"]').each(($input) => {
          cy.wrap($input).should('exist')
      });
      cy.contains('About');
  });
});
