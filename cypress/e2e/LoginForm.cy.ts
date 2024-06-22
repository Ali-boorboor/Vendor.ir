/// <reference types="cypress" />
// ! test for login form that will pass if the user datas exist in db
describe("Login Form Tests", () => {
  // ! correct test (should pass)
  it("should get user datas and let user in (correct username & password)", () => {
    cy.visit("/");

    cy.get(".login-user-name-input").type("amirai");

    cy.get(".login-password-input").type("123456");

    cy.get(".login-button").click();

    cy.url().should("include", "/forgot-password");
  });

  // ! wrong test (should fail)
  it("should get user datas and let user in (wrong username & password)", () => {
    cy.visit("/");

    cy.get(".login-user-name-input").type("fakeUserName");

    cy.get(".login-password-input").type("fakePassword");

    cy.get(".login-button").click();

    cy.url().should("include", "/forgot-password");
  });

  // ! forgot password button test
  it("should navigate user to forgot-password route", () => {
    cy.visit("/");

    cy.get(".login-page-forgot-password-button").click();

    cy.url().should("include", "/forgot-password");
  });

  // ! signup button test
  it("should navigate user to signup route", () => {
    cy.visit("/");

    cy.get(".login-page-signup-button").click();

    cy.url().should("include", "/signup");
  });
});
