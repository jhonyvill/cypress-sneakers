describe("Select product quantity.", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}`);
  });

  it("should increase product quantity.", () => {
    cy.get('[data-testid="counter"]').should("have.text", "0");
    cy.get('button[aria-label="mais"]').click();
    cy.get('[data-testid="counter"]').should("have.text", "1");
  });

  it("should not increase product quantity when it is 10.", () => {
    cy.incrementItemQuantityTo(11);
    cy.get('[data-testid="counter"]').should("have.text", "10");
  });

  it("should decrease product quantity.", () => {
    cy.incrementItemQuantityTo(1);
    cy.get('button[aria-label="menos"]').click();
    cy.get('[data-testid="counter"]').should("have.text", "0");
  });

  it("should not decrease product quantity when it is 0.", () => {
    cy.get('[data-testid="counter"]').should("have.text", "0");
    cy.get('button[aria-label="menos"]').click();
    cy.get('[data-testid="counter"]').should("have.text", "0");
  });
});
