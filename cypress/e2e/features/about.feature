Feature: Página About

  Scenario: Ver contenido de la página About
    Given el usuario visita la página About
    Then debería ver el título "Sobre nosotros"
    And debería ver el nombre "Alejandro"
    And debería ver el nombre "Adrián"
    And debería ver el nombre "Gabriel Alejandro"
