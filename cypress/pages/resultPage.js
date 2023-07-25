export class resultPage {

  elements = {
    numberOfResults: () => cy.get('#result-stats'),
    result: () => cy.get('.LC20lb'),
  }
  
  postResult() {
    this.elements
        .numberOfResults()
        .then(function($elem) {
            cy.log($elem.text()) 
        })
  }

  checkEachResult() {
    const companyName = ['iTech', 'Vention'];
    const regex = new RegExp(`${companyName.join('|')}`);

    this.elements
        .result()
        .each(($el) => {
          expect($el).contains(regex);
            
           cy.log($el.text() + '  релевантен запросу');
        })
    }
}
