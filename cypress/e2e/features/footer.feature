Feature: Comprobación del Footer

  Scenario: Verificar que se muestran los nombres del equipo en el footer
    Given el usuario accede a la página principal
    Then debería ver el nombre "Alejandro Santos Cabrera"
    And debería ver el nombre "Adrián Pardal Romero"
    And debería ver el nombre "Gabriel Alejandro Pérez Pereira"

