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

  Scenario Outline: Determiner si la combinaison carre est possible
    Given Je suis un joueur
    When le premier dés est <des1>
    And  le deuxième dés est <des2>
    And  le troisième dés est <des3>
    And  le quatrieme dés est <des4>
    And  le cinquieme dés est <des5>
    Then c'est un carre <carre>

    Examples:
      | des1 | des2 | des3 | des4 | des5 | carre |
      | 1    | 2    | 3    | 4    | 5    | non   |
      | 1    | 3    | 3    | 5    | 6    | non   |
      | 5    | 4    | 3    | 2    | 1    | non   |
      | 1    | 2    | 2    | 2    | 5    | non   |
      | 1    | 3    | 3    | 3    | 4    | non   |
      | 6    | 3    | 4    | 4    | 4    | non   |
      | 1    | 1    | 1    | 1    | 2    | oui   |
      | 1    | 1    | 1    | 1    | 3    | oui   |
      | 2    | 1    | 1    | 1    | 1    | oui   |
      | 3    | 1    | 1    | 1    | 1    | oui   |
      | 1    | 3    | 1    | 1    | 1    | oui   |
      | 1    | 4    | 1    | 1    | 1    | oui   |
      | 1    | 1    | 3    | 1    | 1    | oui   |
      | 1    | 1    | 4    | 1    | 1    | oui   |
      | 1    | 1    | 1    | 3    | 1    | oui   |
      | 1    | 1    | 1    | 4    | 1    | oui   |
      | 3    | 3    | 3    | 3    | 3    | oui   |
      | 4    | 4    | 4    | 4    | 4    | oui   |

  Scenario Outline: Determiner si la combinaison yams est possible
    Given Je suis un joueur
    When le premier dés est <des1>
    And  le deuxième dés est <des2>
    And  le troisième dés est <des3>
    And  le quatrieme dés est <des4>
    And  le cinquieme dés est <des5>
    Then c'est un yams <yams>

    Examples:
      | des1 | des2 | des3 | des4 | des5 | yams |
      | 1    | 2    | 3    | 4    | 5    | non  |
      | 1    | 1    | 3    | 4    | 5    | non  |
      | 1    | 1    | 1    | 4    | 5    | non  |
      | 1    | 1    | 1    | 1    | 5    | non  |
      | 1    | 1    | 1    | 1    | 1    | oui  |
      | 3    | 3    | 3    | 3    | 3    | oui  |
      | 6    | 6    | 6    | 6    | 6    | oui  |


  Scenario Outline: Determiner si la combinaison full est possible
    Given Je suis un joueur
    When le premier dés est <des1>
    And  le deuxième dés est <des2>
    And  le troisième dés est <des3>
    And  le quatrieme dés est <des4>
    And  le cinquieme dés est <des5>
    Then c'est un full <full>

    Examples:
      | des1 | des2 | des3 | des4 | des5 | full |
      | 1    | 1    | 1    | 4    | 5    | non  |
      | 1    | 1    | 1    | 4    | 4    | oui  |
      | 2    | 2    | 2    | 1    | 6    | non  |
      | 2    | 2    | 2    | 6    | 6    | oui  |
      | 4    | 1    | 4    | 4    | 1    | oui  |
      | 4    | 4    | 1    | 1    | 1    | oui  |
      | 1    | 4    | 4    | 1    | 1    | oui  |
      | 1    | 1    | 4    | 4    | 1    | oui  |
      | 4    | 1    | 4    | 4    | 4    | non  |
      | 4    | 1    | 4    | 5    | 5    | non  |
      | 4    | 4    | 5    | 5    | 5    | oui  |

  Scenario Outline: Determiner si la combinaison grande suite est possible
    Given Je suis un joueur
    When le premier dés est <des1>
    And  le deuxième dés est <des2>
    And  le troisième dés est <des3>
    And  le quatrieme dés est <des4>
    And  le cinquieme dés est <des5>
    Then c'est une grande suite <grandeSuite>

    Examples:
      | des1 | des2 | des3 | des4 | des5 | grandeSuite |
      | 1    | 2    | 3    | 4    | 5    | non         |
      | 5    | 2    | 3    | 4    | 1    | non         |
      | 2    | 4    | 4    | 5    | 6    | non         |
      | 2    | 3    | 4    | 5    | 5    | non         |
      | 2    | 3    | 4    | 5    | 6    | oui         |
      | 6    | 5    | 4    | 3    | 2    | oui         |
      | 5    | 6    | 4    | 3    | 2    | oui         |
      | 6    | 5    | 2    | 3    | 4    | oui         |
      | 6    | 2    | 5    | 3    | 4    | oui         |
      | 5    | 2    | 6    | 3    | 4    | oui         |
      | 5    | 2    | 3    | 6    | 4    | oui         |
