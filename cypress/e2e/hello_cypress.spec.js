/// <reference types = "cypress" />


describe('test', () => {
    it('should do subscribe to news letter', () => {
        cy.visit('https://www.cypress.io');
        cy.get('[data-cy="footer-newsletter"]').click();
        cy.wait(1000);
        cy.get('#subscribe_email').type('t_tali@gmail.com');
        
    });
})
