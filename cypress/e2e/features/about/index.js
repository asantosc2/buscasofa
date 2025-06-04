import {Given, Then} from "@badeball/cypress-cucumber-preprocessor"

Given('el usuario visita la página About', () => {
    cy.visit('/about') // Ajusta si accedes desde navegación
})

Then('debería ver el título {string}', (texto) => {
    cy.get('h1').should('contain', texto)
})

Then('debería ver el nombre {string}', (nombre) => {
    cy.contains(nombre)
})