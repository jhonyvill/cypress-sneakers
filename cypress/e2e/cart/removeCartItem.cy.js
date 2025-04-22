describe("Remove item from shopping cart", () => {
  it("should remove item from cart when clicking the trash icon.", () => {
    cy.visit(`${Cypress.config("baseUrl")}`);
    cy.addItemToCart();
    cy.openCart();

    cy.get('button[aria-label="deletar item"]').click();
    cy.get('section[aria-label="modal carrinho de compras"] p').should(
      "have.text",
      "Your cart is empty."
    );
  });
});
