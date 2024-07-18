/// <reference types = "cypress" />



describe('test', () => {
    it('should do subscribe to news letter', () => {
        const siteUrl = 'https://www.alexandalexa.com/';
        const userName = '2020@test.test';

        cy.visit(siteUrl);
        cy.get('#usercentrics-root').shadow().find('[data-testid="uc-accept-all-button"]').click()
        cy.get('#form-email').type(userName);
        

        // cy.get('#wpLoginAttempt').should('be.enabled')
        // cy.visit('https://www.automationexercise.com/');
        // cy.get('#susbscribe_email').should('be.visible');
        // cy.get('#susbscribe_email').type('test@test.test'); 
        // cy.wait(2000);
        // cy.get('#subscribe').click();
        // cy.get('#alert_success_ alert').should('have.text','You have been successfully subscribed!')
        
        // cy.get('#form-email').type('dom@gmail.net');
        // cy.pause()
        // cy.get('form > .btn').click();
       
       
        

        
    });
})
