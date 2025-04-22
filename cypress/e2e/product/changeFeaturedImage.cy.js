describe("Change featured image on the product page.", () => {
  it("should update featured image by clicking a thumbnail.", () => {
    cy.visit(`${Cypress.config("baseUrl")}`);

    cy.get('[data-testid="featured-image"]')
      .invoke("attr", "src")
      .then((srcFeaturedImage) => {
        cy.get('[data-testid^="grid-image"]').not(".active").first().click();
        cy.get('[data-testid="container-featured-image"] img')
          .invoke("attr", "src")
          .then((srcNewFeaturedImage) => {
            cy.get('[data-testid^="grid-image"].active img')
              .invoke("attr", "src")
              .then((srcClickedImage) => {
                expect(srcClickedImage.replace("-thumbnail", "")).to.equal(
                  srcNewFeaturedImage
                );
                expect(srcFeaturedImage).to.not.equal(srcNewFeaturedImage);
              });
          });
      });
  });
});
