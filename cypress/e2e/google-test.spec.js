describe('Verify Google functionality', () => {

  it('Verify Google search', () => {

    cy.intercept('GET','https://www.google.ru/complete/search?q=iTech**').as('getdata');

    cy.visit('https://www.google.ru/');

    cy.get('[alt="Google"]').should('be.visible');

    cy.get('[type="search"]')
      .should('be.visible')
      .type('iTechArt');

    cy.get('[aria-label="itechart"]')
      .first()
       .click();

    cy.wait('@getdata').its('response.statusCode').should('eq', 200);
        
    cy.get('#result-stats')
      .then(function($elem) {

      cy.log($elem.text()) 
    })

    const companyName = ['iTech', 'Vention'];
    const regex = new RegExp(`${companyName.join('|')}`);

    cy.get('.LC20lb')
      .each(($el) => {
        expect($el).contains(regex);
            
        cy.log($el.text() + '  релевантен запросу');
      })
  })
}) 

