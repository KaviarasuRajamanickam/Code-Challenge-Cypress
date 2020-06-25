# Code Challenge Using Cypress

Automated test cases to remove unwanted whitespace from a string and to check the given string is palindrome or not using cypress.

## Test cases to remove unwanted whitespace from a string

- Assert the value entered should not be empty.

- Assert the value entered should contains extra whitespace, else throw error.

- Assert that the entered value should not have extra space before the string.

- Assert that the entered value should not have extra space after the string.

- Assert that the entered value should not have extra space within the string.

- Assert that the entered value should not have extra space before, after and within the string.

- Assert that the entered value should not have any space before, after and within the string.

### remove_whitespace_spec.js

```shell
    describe('To remove unwanted whitespave from the string ', () => {
        beforeEach(() => {
            cy.visit('/');
            cy.get('[data-cy=checkInput]').as('inputValue');
            cy.get('[data-cy=removeWhitespace]').as('removeWhitespace');
            cy.get('[data-cy=removeAllWhitespace]').as('removeAllWhitespace');
            cy.get('[data-cy=result]').as('result');
        });

        it('Assert the value entered should not be empty', () => {
            cy.get('@removeWhitespace').click();
            cy.get('@result')
                .should('have.class','error')
                .invoke('text')
                .should('be.equal', 'The value should not be empty');
        });

        it('Assert the value entered should contains extra whitespace, else throw error', () => {
            cy.get('@inputValue').type('string');
            cy.get('@removeWhitespace').click();
            cy.get('@result')
                .should('have.class','error')
                .invoke('text')
                .should('be.equal', 'The entered value doesn\'t have any whitespace');
        });
        ----------
        -------
    })
```

## Test cases to check the given string is palindrome or not

- Assert the value entered should not be empty.

- Assert that the entered value is palindrome, if correctly matched.

- Assert that the entered value is not a palindrome, if correctly matched but doesn't matched the case.

- Assert that the entered value is not a palindrome, if wrongly matched.

- Assert that the entered value is palindrome, if numbers/special characters matched correctly.

### check_palindrome_spec.js

```shell
    describe('To check whether the entered string is palindrome or not', () => {
        beforeEach(() => {
            cy.visit('/');
            cy.get('[data-cy=checkInputPalindrome]').as('inputValue');
            cy.get('[data-cy=checkPalindrome]').as('checkPalindrome');
            cy.get('[data-cy=resultPalindrome]').as('result');
        });

        it('Assert the value entered should not be empty', () => {
            cy.get('@checkPalindrome').click();
            cy.get('@result')
                .should('have.class','error')
                .invoke('text')
                .should('be.equal', 'The value should not be empty');
        })

        it('Assert that the entered value is palindrome, if correctly matched', () => {
            cy.get('@inputValue').type('madam');
            cy.get('@checkPalindrome').click();
            cy.get('@result')
                .should('have.class','success')
                .invoke('text')
                .should('be.equal', '"madam" is a palindrome');
        })
        ----------
        -------
    )}
```

## Built With

- [cypress.io](https://www.cypress.io/)
