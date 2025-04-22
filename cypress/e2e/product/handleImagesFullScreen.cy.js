describe("Change featured image in fullscreen modal.", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}`);
    cy.openImagesModal();
  });

  it("should change featured product image in fullscreen when clicking on thumbnail.", () => {
    cy.get('[data-testid="featured-image"]')
      .invoke("attr", "src")
      .then((srcFeaturedImage) => {
        cy.get('section[aria-label="modal imagens do produto"]')
          .find('[data-testid^="grid-image"]')
          .not(".active")
          .first()
          .click();

        cy.get('section[aria-label="modal imagens do produto"]')
          .find('[data-testid^="grid-image"].active img')
          .invoke("attr", "src")
          .then((srcClickedImage) => {
            cy.get('section[aria-label="modal imagens do produto"]')
              .find('[data-testid="featured-image"]')
              .invoke("attr", "src")
              .then((srcNewFeaturedImage) => {
                expect(srcClickedImage.replace("-thumbnail", "")).to.equal(
                  srcNewFeaturedImage
                );
                expect(srcNewFeaturedImage).not.to.equal(srcFeaturedImage);
              });
          });
      });
  });

  it("should change featured product image in fullscreen when clicking next arrow.", () => {
    cy.get('section[aria-label="modal imagens do produto"]')
      .find('[data-testid="featured-image"]')
      .invoke("attr", "src")
      .then((srcFeaturedImage) => {
        cy.get('section[aria-label="modal imagens do produto"]')
          .find('button[aria-label="próxima imagem"]')
          .click();

        cy.get('section[aria-label="modal imagens do produto"]')
          .find('[data-testid^="grid-image"].active img')
          .invoke("attr", "src")
          .then((srcNextImage) => {
            cy.get('section[aria-label="modal imagens do produto"]')
              .find('[data-testid="featured-image"]')
              .invoke("attr", "src")
              .then((srcNewFeaturedImage) => {
                expect(srcNextImage.replace("-thumbnail", "")).to.equal(
                  srcNewFeaturedImage
                );
                expect(srcNewFeaturedImage).not.to.equal(srcFeaturedImage);
              });
          });
      });
  });

  it("should change featured product image in fullscreen when clicking previous arrow.", () => {
    cy.get('section[aria-label="modal imagens do produto"]')
      .find('[data-testid^="grid-image"]')
      .not(".active")
      .last()
      .click();

    cy.get('section[aria-label="modal imagens do produto"]')
      .find('[data-testid="featured-image"]')
      .invoke("attr", "src")
      .then((srcFeaturedImage) => {
        cy.get('section[aria-label="modal imagens do produto"]')
          .find('button[aria-label="imagem anterior"]')
          .click();

        cy.get('section[aria-label="modal imagens do produto"]')
          .find('[data-testid^="grid-image"].active img')
          .invoke("attr", "src")
          .then((srcPreviousImage) => {
            cy.get('section[aria-label="modal imagens do produto"]')
              .find('[data-testid="featured-image"]')
              .invoke("attr", "src")
              .then((srcNewFeaturedImage) => {
                expect(srcPreviousImage.replace("-thumbnail", "")).to.equal(
                  srcNewFeaturedImage
                );
                expect(srcNewFeaturedImage).not.to.equal(srcFeaturedImage);
              });
          });
      });
  });

  it("should not change featured image when clicking previous arrow on the first image.", () => {
    cy.get('section[aria-label="modal imagens do produto"]')
      .find('[data-testid^="grid-image"]')
      .first()
      .click();

    cy.get('section[aria-label="modal imagens do produto"]')
      .find('[data-testid="featured-image"]')
      .invoke("attr", "src")
      .then((srcFeaturedImage) => {
        cy.get('section[aria-label="modal imagens do produto"]')
          .find('button[aria-label="imagem anterior"]')
          .click();

        cy.get('section[aria-label="modal imagens do produto"]')
          .find('[data-testid="featured-image"]')
          .invoke("attr", "src")
          .then((srcNewFeaturedImage) => {
            expect(srcFeaturedImage).to.equal(srcNewFeaturedImage);
          });
      });
  });

  it("should not change featured image when clicking next arrow on the last image.", () => {
    cy.get('section[aria-label="modal imagens do produto"]')
      .find('[data-testid^="grid-image"]')
      .last()
      .click();

    cy.get('section[aria-label="modal imagens do produto"]')
      .find('[data-testid="featured-image"]')
      .invoke("attr", "src")
      .then((srcFeaturedImage) => {
        cy.get('section[aria-label="modal imagens do produto"]')
          .find('button[aria-label="próxima imagem"]')
          .click();

        cy.get('section[aria-label="modal imagens do produto"]')
          .find('[data-testid="featured-image"]')
          .invoke("attr", "src")
          .then((srcNewFeaturedImage) => {
            expect(srcFeaturedImage).to.equal(srcNewFeaturedImage);
          });
      });
  });
});
