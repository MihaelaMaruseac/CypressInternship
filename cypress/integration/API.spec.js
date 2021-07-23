/// <reference types="cypress" />

describe('Check API', () => {
    beforeEach(() => {
      
      cy.visit('https://automationteststore.com/')
    })
  
    it('Check API Requests', () => {
        cy.request('https://petstore.swagger.io/v2/store/inventory').then((result)=>{
            console.log(result.body)
            console.table(result.body)
            cy.log("Sold: ", result.body.sold)
        })
    })
  
  
  
  })