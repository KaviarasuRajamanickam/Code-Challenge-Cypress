/// <reference types="Cypress" />

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

    it('Assert that the entered value should not have extra space after the string', () => {
        cy.get('@inputValue').type('This is to test the string  ');
        cy.get('@removeWhitespace').click();
        cy.get('@output')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', 'This is to test the string');
    });

    it('Assert that the entered value should not have extra space within the string', () => {
        cy.get('@inputValue').type('This   is to test   the   string');
        cy.get('@removeWhitespace').click();
        cy.get('@output')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', 'This is to test the string');
    });

    it('Assert that the entered value should not have extra space before, after and within the string', () => {
        cy.get('@inputValue').type('  This   is to test   the   string   ');
        cy.get('@removeWhitespace').click();
        cy.get('@output')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', 'This is to test the string');
    });

})