context('Seatch for element in modal', () => {
  beforeEach(() => {
    cy.visit('https://ns2hp.csb.app/');
  });

  it('Passes because we explicitly search in the modal', () => {
    // Finds only a single button because the invisible modal has aria-hidden="true"
    cy.findByRole('button', { name: 'Go' }).click();
    cy.findByText('Modal title').should('be.visible');
    cy.wait(500);

    // Note this should only find one button because the Bootstrap modal adds aria-modal=true and removes aria-hidden="true"
    cy.get('[aria-modal=true]').findByRole('button', { name: 'Go' }).click();
  });

  it('Fails finding two buttons when the modal is open', () => {
    // Finds only a single button because the invisible modal has aria-hidden="true"
    cy.findByRole('button', { name: 'Go' }).click();
    cy.findByText('Modal title').should('be.visible');
    cy.wait(500);

    // Note this should only find one button because the Bootstrap modal adds aria-modal=true and removes aria-hidden="true"
    cy.findByRole('button', { name: 'Go' }).click();
  });
});
