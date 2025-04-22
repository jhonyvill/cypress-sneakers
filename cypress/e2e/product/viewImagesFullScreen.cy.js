describe("View images in fullscreen modal.", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}`);
  });

  it("should open fullscreen image view when clicking the featured image.", () => {
    cy.get('[data-testid="featured-image"]')
      .invoke("attr", "src")
      .then((srcFeaturedImage) => {
        cy.openImagesModal();

        cy.get('section[aria-label="modal imagens do produto"]').should(
          "be.visible"
        );
        cy.get(
          'section[aria-label="modal imagens do produto"] [data-testid="featured-image"]'
        )
          .invoke("attr", "src")
          .then((srcFeaturedImageModal) => {
            expect(srcFeaturedImageModal).to.equal(srcFeaturedImage);
          });
      });
  });

  it("should display product images, navigation arrows, and close button in the modal.", () => {
    cy.openImagesModal();
    cy.get('section[aria-label="modal imagens do produto"]').within(() => {
      cy.get('[aria-label="imagens do produto"]').should("be.visible");
      cy.get('button[aria-label="imagem anterior"]').should("be.visible");
      cy.get('button[aria-label="próxima imagem"]').should("be.visible");
      cy.get('[data-testid="close-button"]').should("be.visible");
    });
  });
});
