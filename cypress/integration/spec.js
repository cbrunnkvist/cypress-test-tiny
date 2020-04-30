/// <reference types="cypress" />
describe("Moment library defaults", () => {
  // n.b. default format will not affect parsing:
  // https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/#default-format
  const standardDate = "1942-12-31";

  it("uses defaults as assigned in support/*", () => {
    cy.log(Cypress.moment.defaultFormat).then(()=>{
      expect(
        Cypress.moment(standardDate)
          .format()
      ).to.equal("31/12/1942");
    })
  });

  context("when overridden at test-time", () => {
    before(() =>
      Cypress.moment.defaultFormat = "DD ... MM ... YYYY"
    );

    it("uses the expected defaults", () => {
      cy.log(Cypress.moment.defaultFormat).then(()=>{
        expect(
          Cypress.moment(standardDate)
            .format()
        ).to.equal("31 ... 12 ... 1942");
      })
    });
  });
});
