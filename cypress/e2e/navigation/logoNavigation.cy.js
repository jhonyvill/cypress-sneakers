describe('Redirect to homepage via "Sneakers" logo.', () => {
  it("should redirect to the product homepage when clicking the logo.", () => {
    cy.visit(`${Cypress.config("baseUrl")}/about`);
    cy.location("pathname").should("eq", "/about");

    cy.get('[aria-label="Home"]').click();
    cy.location("pathname").should("eq", "/");
  });

  it("should stay on the product homepage when clicking the logo.", () => {
    cy.visit(`${Cypress.config("baseUrl")}`);
    cy.get('[aria-label="Home"]').click();
    cy.location("pathname").should("eq", "/");
  });
});
