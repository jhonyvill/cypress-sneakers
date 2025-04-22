describe("View user profile actions.", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}`);
  });

  it("[will fail] should display links to log out and view user profile information.", () => {
    cy.log("Esse teste irá falhar. Há um bug proposital aqui.");

    cy.get('img[alt="imagem de perfil"]').click();
    cy.get('[data-testid="profile-modal"]').should("be.visible");
    cy.get('[data-testid="profile-modal"] a[href="/user"]').should(
      "have.text",
      "Ver informações de perfil"
    );
    cy.get('[data-testid="profile-modal"] a[href="/logout"]').should(
      "have.text",
      "Sair"
    );
  });

  it("should close the user info modal when clicking the profile picture thumbnail.", () => {
    cy.get('img[alt="imagem de perfil"]').click();
    cy.get('[data-testid="profile-modal"]').should("be.visible");
    cy.get('img[alt="imagem de perfil"]').click();
    cy.get('[data-testid="profile-modal"]').should("not.exist");
  });
});
