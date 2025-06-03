import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario accede a la página principal", () => {
  cy.visit("/");
});

Then("debería ver el nombre {string}", (nombre) => {
  cy.contains(nombre).should("be.visible");
});
