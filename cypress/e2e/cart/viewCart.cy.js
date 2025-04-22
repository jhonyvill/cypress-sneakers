describe("View shopping cart.", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}`);
  });

  it("should display empty cart message when there are no items.", () => {
    cy.openCart();

    cy.get('section[aria-label="modal carrinho de compras"] h2').should(
      "have.text",
      "Cart"
    );
    cy.get('section[aria-label="modal carrinho de compras"] p').should(
      "have.text",
      "Your cart is empty."
    );
  });

  it("should display added item, delete button, and checkout button when there is an item in the cart.", () => {
    cy.addItemToCart();
    cy.openCart();
    cy.get('section[aria-label="modal carrinho de compras"] ul li').should(
      "have.length",
      1
    );
    cy.get('button[aria-label="deletar item"]').should("be.visible");
    cy.get('button[aria-label="finalizar compra"]').should("be.visible");
  });

  it("should close cart modal when clicking the cart icon.", () => {
    cy.openCart();
    cy.get('section[aria-label="carrinho de compras"] button').click();
    cy.get('section[aria-label="modal carrinho de compras"]').should(
      "not.exist"
    );
  });

  it("should close cart modal when clicking outside the modal.", () => {
    cy.openCart();
    cy.get("body").click(0, 0);
    cy.get('section[aria-label="modal carrinho de compras"]').should(
      "not.exist"
    );
  });
});
