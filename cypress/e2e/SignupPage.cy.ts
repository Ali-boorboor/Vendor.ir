/// <reference types="cypress" />
// ! test for signup page that will get user datas to sign the user up
describe("signup Form Tests", () => {
  it("should navigate user to signup/company route", () => {
    cy.visit("/signup");

    cy.get("#company-dropdown").click();

    cy.get("#SignupDropDownBoxCompany").click();

    cy.url().should("include", "/signup/company");
  });

  it("should navigate user to signup/shop route", () => {
    cy.visit("/signup");

    cy.get("#person-dropdown").click();

    cy.get("#SignupDropDownBoxShop").click();

    cy.url().should("include", "/signup/shop");
  });

  it("should navigate user to signup/workshop route", () => {
    cy.visit("/signup");

    cy.get("#person-dropdown").click();

    cy.get("#SignupDropDownBoxWorkshop").click();

    cy.url().should("include", "/signup/workshop");
  });

  it("should navigate user to signup/person route", () => {
    cy.visit("/signup");

    cy.get("#person-dropdown").click();

    cy.get("#SignupDropDownBoxPerson").click();

    cy.url().should("include", "/signup/person");
  });
});
