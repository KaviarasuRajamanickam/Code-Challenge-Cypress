# Code Challenge Using Cypress

Automated test cases to remove unwanted whitespace from a string and to check the given string is palindrome or not using cypress.

## Dependencies

To test the application with Cypress commands, you need a Cypress testing application in your local machine.

- Download and use the below application to test the Cypress commands 
https://github.com/KaviarasuRajamanickam/cypress-testing

```shell
    removeExtraSpace = () => {
        if(this.state.inputValue === ''){
            this.setState({
                result: 'The value should not be empty',
                error: true
            })
        } else {
            this.setState({
                result: this.state.inputValue.replace(/\s+/g,' ').trim(),
                error: false
            })
        }
    }

    checkPalindrome = () => {
        if(this.state.inputValue === ''){
            this.setState({
                result: 'The value should not be empty',
                error: true
            })
        } else {
            if(this.state.inputValue === this.reverseString(this.state.inputValue)) {
                this.setState({
                    result: '"'+this.state.inputValue +'" is a palindrome',
                    error: false
                })
            } else {
                this.setState({
                    result: '"'+this.state.inputValue +'" is not a palindrome',
                    error: true
                })
            }
        }        
    }

    reverseString = (str) => {
        return (str === '') ? '' : this.reverseString(str.substr(1)) + str.charAt(0);
    }
```

## Test cases to remove unwanted whitespace from a string

- Assert the value entered should not be empty.

- Assert that the entered value should not have extra space before the string.

- Assert that the entered value should not have extra space after the string.

- Assert that the entered value should not have extra space within the string.

- Assert that the entered value should not have extra space before, after and within the string.

### remove_whitespace_spec.js

```shell
    describe('To remove unwanted whitespave from the string ', () => {
        beforeEach(() => {
            cy.visit('/example1');
            cy.get('[data-cy=checkInput]').as('inputValue');
            cy.get('[data-cy=removeWhitespace]').as('removeWhitespace');
            cy.get('[data-cy=output]').as('output');
        });

        it('Assert the value entered should not be empty', () => {
            cy.get('@removeWhitespace').click();
            cy.get('@output')
                .should('have.class','error')
                .invoke('text')
                .should('be.equal', 'The value should not be empty');
        });

        it('Assert that the entered value should not have extra space before the string', () => {
            cy.get('@inputValue').type('  This is to test the string');
            cy.get('@removeWhitespace').click();
            cy.get('@output')
                .should('have.class','success')
                .invoke('text')
                .should('be.equal', 'This is to test the string');
        });
        ----------
        -------
    })
```

## Test cases to check the given string is palindrome or not

- Assert the value entered should not be empty.

- Assert that the entered value is palindrome, if correctly matched.

- Assert that the entered value is not a palindrome, if wrongly matched.

- Assert that the entered value is palindrome, if numbers/special characters matched correctly.

### check_palindrome_spec.js

```shell
    describe('To check whether the entered string is palindrome or not', () => {
        beforeEach(() => {
            cy.visit('/example1');
            cy.get('[data-cy=checkInput]').as('inputValue');
            cy.get('[data-cy=checkPalindrome]').as('checkPalindrome');
            cy.get('[data-cy=output]').as('output');
        });

        it('Assert the value entered should not be empty', () => {
            cy.get('@checkPalindrome').click();
            cy.get('@output')
                .should('have.class','error')
                .invoke('text')
                .should('be.equal', 'The value should not be empty');
        })

        it('Assert that the entered value is palindrome, if correctly matched', () => {
            cy.get('@inputValue').type('madam');
            cy.get('@checkPalindrome').click();
            cy.get('@output')
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
