describe("Open home page.", () => {
  it("should load the application's home page.", () => {
    cy.visit(`${Cypress.config("baseUrl")}`);
    cy.title().should("be.equal", "Sneakers");
  });
});
