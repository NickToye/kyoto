describe('tabs', () => {
  it.only('should display the tabs', () => {
    cy.visit('/');
    cy.get('div.tabs_list').its('length').should('eq', 4);
  });
});
