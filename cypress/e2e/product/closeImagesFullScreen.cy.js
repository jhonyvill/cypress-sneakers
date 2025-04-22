describe("Close fullscreen image view.", () => {
  it("should close the fullscreen image viewer modal.", () => {
    cy.visit(`${Cypress.config("baseUrl")}`);
    cy.openImagesModal();

    cy.get(
      'section[aria-label="modal imagens do produto"] [data-testid="close-button"]'
    ).click();
    cy.get('section[aria-label="modal imagens do produto"]').should(
      "not.exist"
    );
  });
});
