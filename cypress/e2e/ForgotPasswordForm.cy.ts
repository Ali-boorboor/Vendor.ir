/// <reference types="cypress" />
// ! test for forgot password form that will pass if the user datas exist in db
describe("forgot password Form Tests", () => {
  // // ! correct test (should pass)
  // it("should get user datas and let user in (correct username)", () => {
  //   cy.visit("/");

  //   cy.get(".login-user-name-input").type("amirai");

  //   cy.get(".forgot-password-page-login-button").click();

  //   cy.url().should("include", "/forgot-password");
  // });

  // ! login button test
  it("should navigate user to / (main) route", () => {
    cy.visit("/forgot-password");

    cy.get(".forgot-password-login-button").click();

    cy.url().should("include", "/");
  });

  // ! signup button test
  it("should navigate user to signup route", () => {
    cy.visit("/forgot-password");

    cy.get(".forgot-password-page-signup-button").click();

    cy.url().should("include", "/signup");
  });
});
