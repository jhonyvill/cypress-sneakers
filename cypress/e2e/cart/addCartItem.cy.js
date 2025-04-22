describe("Add item to shopping cart.", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}`);
  });

  it("should not allow adding item with zero quantity.", () => {
    cy.get('[data-testid="counter"]').should("have.text", "0");
    cy.contains("button", "Add to cart").click();
    cy.openCart();
    cy.get('section[aria-label="modal carrinho de compras"] p').should(
      "have.text",
      "Your cart is empty."
    );
  });

  it("should add item to cart.", () => {
    cy.addItemToCart();
    cy.openCart();

    cy.get('[data-testid="final-price"]')
      .invoke("text")
      .then((finalPrice) => {
        cy.get('[data-testid="cart-item-price"]').should(
          "have.text",
          finalPrice
        );
        cy.get('[data-testid="cart-item-quantity"]').should("have.text", "1");
        cy.get('[data-testid="cart-item-total-price"]').should(
          "have.text",
          finalPrice
        );
      });
  });

  it("should add more of the same item to the cart if it already exists.", () => {
    cy.addItemToCart();
    cy.openCart();
    cy.get('[data-testid="cart-item-quantity"]').should("have.text", "1");

    cy.addItemToCart();
    cy.openCart();

    cy.get('[data-testid="final-price"]')
      .invoke("text")
      .then((finalPrice) => {
        cy.get('[data-testid="cart-item-price"]').should(
          "have.text",
          finalPrice
        );
        cy.get('[data-testid="cart-item-quantity"]').should("have.text", "2");
        cy.get('[data-testid="cart-item-total-price"]').should(
          "have.text",
          "$250.00"
        );
      });
  });

  it("should keep item in cart when navigating through the app.", () => {
    cy.log("Esse teste irá falhar. Há um bug proposital aqui.");

    cy.addItemToCart();
    cy.openCart();
    cy.verifyTotalItensInCart(1);
    cy.visit(`${Cypress.config("baseUrl")}/about`);

    cy.openCart();
    cy.verifyTotalItensInCart(1);
  });

  it("should keep item in cart after page reload.", () => {
    cy.log("Esse teste irá falhar. Há um bug proposital aqui.");

    cy.addItemToCart();
    cy.openCart();
    cy.verifyTotalItensInCart(1);
    cy.reload();

    cy.openCart();
    cy.verifyTotalItensInCart(1);
  });
});
