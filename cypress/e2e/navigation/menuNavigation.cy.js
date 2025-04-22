describe("Navigation through the menu.", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}`);
  });

  it('[will fail] should display the "Collections" page when clicking the corresponding menu option.', () => {
    cy.log("Esse teste irá falhar. Há um bug proposital aqui.");

    cy.get('a[href="/collections"]').click();
    cy.location("pathname").should("eq", "/collections");
    cy.get('section[aria-label="collection page"]', { timeout: 1000 }).should(
      "be.visible"
    );
  });

  it('[will fail] should display the "Men" page when clicking the corresponding menu option.', () => {
    cy.log("Esse teste irá falhar. Há um bug proposital aqui.");

    cy.get('a[href="/men"]').click();
    cy.location("pathname").should("eq", "/men");
    cy.get('section[aria-label="men page"]', { timeout: 1000 }).should(
      "be.visible"
    );
  });

  it('[will fail] should display the "Women" page when clicking the corresponding menu option.', () => {
    cy.log("Esse teste irá falhar. Há um bug proposital aqui.");

    cy.get('a[href="/women"]').click();
    cy.location("pathname").should("eq", "/women");
    cy.get('section[aria-label="women page"]', { timeout: 1000 }).should(
      "be.visible"
    );
  });

  it('[will fail] should display the "About" page when clicking the corresponding menu option.', () => {
    cy.log("Esse teste irá falhar. Há um bug proposital aqui.");

    cy.get('a[href="/about"]').click();
    cy.location("pathname").should("eq", "/about");
    cy.get('section[aria-label="about page"]', { timeout: 1000 }).should(
      "be.visible"
    );
  });

  it('[will fail] should display the "Contact" page when clicking the corresponding menu option.', () => {
    cy.log("Esse teste irá falhar. Há um bug proposital aqui.");

    cy.get('a[href="/contact"]').click();
    cy.location("pathname").should("eq", "/contact");
    cy.get('section[aria-label="collection page"]', { timeout: 1000 }).should(
      "be.visible"
    );
  });

  it("should stay on the current page when clicking its corresponding menu option.", () => {
    cy.visit(`${Cypress.config("baseUrl")}/contact`);
    cy.location("pathname").should("eq", "/contact");
    cy.get('a[href="/contact"]').click();
    cy.location("pathname").should("eq", "/contact");
  });
});
