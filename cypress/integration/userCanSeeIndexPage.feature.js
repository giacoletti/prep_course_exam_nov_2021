describe('User can see index page', () => {
    
    before(() => {
        cy.visit('/');
    });

    it('is expected to see index page with input elements and labels', () => {
        cy.get('h1').should('contain.text', 'BMI Calculator').should('be.visible');
        cy.get('label[id=heightLabel]').should('contain.text', 'Height').should('be.visible');
        cy.get('input[id=height]').should('be.visible');
        cy.get('label[id=weightLabel]').should('contain.text', 'Weight').should('be.visible');
        cy.get('input[id=weight]').should('be.visible');
        cy.get('button[id=calculate-bmi]').should('be.visible').should('contain.text', 'Calculate');
    });

});