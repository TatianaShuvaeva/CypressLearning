/// <reference types = "cypress" />


describe('test', () => {
    it('should do subscribe to news letter', () => {
        // cy.visit('https://de.wikipedia.org/');
        // cy.get('#pt-login > a > span').click();
        // cy.get('#wpName1').should('be.visible');
        // cy.get('#wpName1').type('talismancccc');

        // cy.get('#wpLoginAttempt').should('be.enabled')
        cy.visit('https://www.automationexercise.com/');
        cy.get('#susbscribe_email').should('be.visible');
        cy.get('#susbscribe_email').type('test@test.test');
        cy.get('#subscribe').click();
        // [data-cy="footer-newsletter"]
        // cy.wait(1000);
        // cy.get('#subscribe_email').type('t_tali@gmail.com');#

        
    });
})
