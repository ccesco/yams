# features/combinaison-des.feature
Feature: Combinaison des dés

  Scenario Outline: Determiner si la combinaison brelan est possible
    Given Je suis un joueur
    When le premier dés est <des1>
    And  le deuxième dés est <des2>
    And  le troisième dés est <des3>
    And  le quatrieme dés est <des4>
    And  le cinquieme dés est <des5>
    Then c'est un brelan <brelan>

    Examples:
      | des1 | des2 | des3 | des4 | des5 | brelan |
      | 1    | 2    | 3    | 4    | 5    | non    |
      | 1    | 3    | 3    | 5    | 6    | non    |
      | 5    | 4    | 3    | 2    | 1    | non    |
      | 1    | 2    | 2    | 4    | 5    | non    |
      | 1    | 3    | 3    | 4    | 4    | non    |
      | 6    | 3    | 3    | 4    | 4    | non    |
      | 1    | 1    | 1    | 2    | 2    | oui    |
      | 1    | 1    | 1    | 2    | 2    | oui    |
      | 1    | 1    | 1    | 2    | 3    | oui    |
      | 2    | 2    | 1    | 1    | 1    | oui    |
      | 2    | 1    | 1    | 2    | 1    | oui    |
      | 1    | 2    | 1    | 2    | 1    | oui    |
      | 4    | 6    | 4    | 6    | 4    | oui    |
      | 4    | 4    | 4    | 6    | 4    | oui    |
      | 1    | 1    | 1    | 1    | 2    | oui    |
      | 2    | 1    | 1    | 1    | 1    | oui    |
      | 1    | 1    | 1    | 1    | 1    | oui    |
      | 1    | 1    | 6    | 6    | 1    | oui    |
