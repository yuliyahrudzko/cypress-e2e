import { homePage } from '../pages/homePage';

let home = new homePage();
let companyName = ['iTech', 'Vention'];
const REGEX = new RegExp(`${companyName.join('|')}`);

const ELEMENTS = {
  logo: '[alt="Google"]',
  numberOfResults: '#result-stats',
  result: '.LC20lb',
}

describe('Verify Google functionality', () => {
  it('Verify Google search', () => {

    cy.intercept('GET','https://www.google.ru/complete/search?q=iTech**').as('getdata');

    cy.visit('https://www.google.ru/');

    cy.get(ELEMENTS.logo).should('be.visible');

    home.typeInSearchBar();

    home.selectFirstResult();

    cy.wait('@getdata').its('response.statusCode').should('eq', 200);

    cy.get(ELEMENTS.numberOfResults)
      .then($element => { 
        cy.log($element.text().slice(12, 20));
      })

    cy.get(ELEMENTS.result)
      .each(($element) => {
        expect($element).contains(REGEX)        
        cy.log($element.text() + '  релевантен запросу');
      })

  })
}) 
