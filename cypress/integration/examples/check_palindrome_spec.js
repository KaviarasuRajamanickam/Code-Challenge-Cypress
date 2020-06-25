/// <reference types="Cypress" />

describe('To check whether the entered string is palindrome or not', () => {
    beforeEach(() => {
        cy.visit('/example5');
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

    it('Assert that the entered value is not a palindrome, if wrongly matched', () => {
        cy.get('@inputValue').type('test');
        cy.get('@checkPalindrome').click();
        cy.get('@output')
            .should('have.class','error')
            .invoke('text')
            .should('be.equal', '"test" is not a palindrome');
    })

    it('Assert that the entered value is palindrome, if numbers/special characters matched correctly', () => {
        cy.get('@inputValue').type('23#@@#32');
        cy.get('@checkPalindrome').click();
        cy.get('@output')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', '"23#@@#32" is a palindrome');
    })

})