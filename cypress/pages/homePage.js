export class homePage {

  ELEMENTS = {
    searchBar: () =>  cy.get('[type="search"]'),
    firstResult: () => cy.get('[aria-label="itechart"]'),
    itechart: 'iTechArt'
  }
  
  typeInSearchBar() {
    this.ELEMENTS
        .searchBar()
        .should('be.visible')
        .type(this.ELEMENTS.itechart);
  }

  selectFirstResult() {
    this.ELEMENTS
        .firstResult()
        .first()
        .click();
  }
}