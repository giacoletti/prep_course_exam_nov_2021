describe('User can calculate BMI from index page', () => {
    
    describe('with all input fields', () => {
        
        before(() => {
            cy.visit('/');
            cy.get('input[id=height]').type('174');
            cy.get('input[id=weight]').type('67');
            cy.get('button[id=calculate-bmi]').click();
        });

        it('is expected to see the BMI calculated on screen', () => {
            cy.get('div[id=response-message]')
                .should('contain.text', '21.81').should('contain.text', 'Normal Weight');
        });

    });

});