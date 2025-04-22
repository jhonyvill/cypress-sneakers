describe("Proceed to checkout from shopping cart.", () => {
  it('should proceed to checkout when clicking "Checkout" button in cart.', () => {
    cy.visit(`${Cypress.config("baseUrl")}`);

    cy.addItemToCart();
    cy.openCart();

    cy.get("button").contains("Checkout").click();
    cy.get('section[aria-label="modal carrinho de compras"] p').should(
      "have.text",
      "Your cart is empty."
    );
  });
});
