export class homePage {

  elements = {
    logo: () => cy.get('[alt="Google"]'),
    searchBar: () =>  cy.get('[type="search"]'),
    firstRequest: () => cy.get('[aria-label="itechart"]'),
  }

  checkLogo() {
    this.elements
        .logo()
        .should('be.visible');
  }
  
  typeInSearchBar() {
    this.elements
        .searchBar()
        .should('be.visible')
        .type('iTechArt');
  }

  getSearchRequest() {
    this.elements
        .firstRequest()
        .first()
        .click();
  }
}