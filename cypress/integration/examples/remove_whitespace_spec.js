/// <reference types="Cypress" />

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

    it('Assert the value entered should contains extra whitespace anywhere', () => {
        cy.get('@inputValue').type('string');
        cy.get('@removeWhitespace').click();
        cy.get('@result')
            .should('have.class','error')
            .invoke('text')
            .should('be.equal', 'The entered value doesn\'t have any whitespace');
    });

    it('Assert that the entered value should not have extra whitespace before', () => {
        cy.get('@inputValue').type('  This is to test the string');
        cy.get('@removeWhitespace').click();
        cy.get('@result')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', 'This is to test the string');
    });

    it('Assert that the entered value should not have extra whitespace after', () => {
        cy.get('@inputValue').type('This is to test the string  ');
        cy.get('@removeWhitespace').click();
        cy.get('@result')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', 'This is to test the string');
    });

    it('Assert that the entered value should not have extra whitespace within', () => {
        cy.get('@inputValue').type('This   is to test   the   string');
        cy.get('@removeWhitespace').click();
        cy.get('@result')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', 'This is to test the string');
    });

    it('Assert that the entered value should not have extra whitespace before, after and within', () => {
        cy.get('@inputValue').type('  This   is to test   the   string   ');
        cy.get('@removeWhitespace').click();
        cy.get('@result')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', 'This is to test the string');
    });
    
    it('Assert that the entered value should not have any whitespace before, after and within', () => {
        cy.get('@inputValue').type('  This   is to test   the   string   ');
        cy.get('@removeAllWhitespace').click();
        cy.get('@result')
            .should('have.class','success')
            .invoke('text')
            .should('be.equal', 'Thisistotestthestring');
    });

})