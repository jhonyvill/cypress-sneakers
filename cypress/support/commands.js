Cypress.Commands.add("incrementItemQuantityTo", (value) => {
  for (let i = 0; i < value; i++) {
    cy.get('button[aria-label="mais"]').click();
  }
});

Cypress.Commands.add("addItemToCart", () => {
  cy.incrementItemQuantityTo(1);
  cy.contains("button", "Add to cart").click();
});

Cypress.Commands.add("openCart", () => {
  cy.get('section[aria-label="modal carrinho de compras"]').should("not.exist");
  cy.get('section[aria-label="carrinho de compras"] button').click();
  cy.get('section[aria-label="modal carrinho de compras"]').should(
    "be.visible"
  );
});

Cypress.Commands.add("verifyTotalItensInCart", (expectedLength) => {
  cy.get('section[aria-label="modal carrinho de compras"] ul', {
    timeout: 1000,
  })
    .find("li")
    .should("have.length", expectedLength);
});
