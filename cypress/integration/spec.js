describe('Each + Contains Bug', () => {
  it('test', () => {
      cy.visit('https://www.google.com/');
      cy.contains('About').should('be.visible');
      cy.get('input[type="submit"]').each(($input) => {
          cy.wrap($input).should('exist')
      });
      cy.contains('About').click();
  });
});
