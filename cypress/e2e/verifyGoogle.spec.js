import { homePage } from '../pages/homePage';
import { resultPage } from '../pages/resultPage';

let home = new homePage();
let result = new resultPage();

describe('Verify Google functionality', () => {
  it('Verify Google search', () => {

    cy.intercept('GET','https://www.google.ru/complete/search?q=iTech**').as('getdata');

      cy.visit('https://www.google.ru/');

      home.checkLogo();

      home.typeInSearchBar();

      home.getSearchRequest();

      cy.wait('@getdata').its('response.statusCode').should('eq', 200);

      result.postResult();

      result.checkEachResult();
  })
}) 
