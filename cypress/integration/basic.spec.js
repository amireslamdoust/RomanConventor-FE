describe('test convert works', () => {
  it('successfully render ', () => {
    cy.visit('/')
    cy.get('[data-cy="numeric-input-number"]').type('215')
    cy.get('[data-cy="roman-input-roman"]').should('have.value', 'CCXV')

    cy.wait(400)

    cy.get('[data-cy="roman-input-roman"]').type('MCX')
    cy.get('[data-cy="numeric-input-number"]').should('have.value', '1,110')
  })
})
