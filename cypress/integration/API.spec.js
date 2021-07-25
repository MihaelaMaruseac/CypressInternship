/// <reference types="cypress" />

describe('Check API', () => {
  beforeEach(() => {
    cy.visit('/')
  })

    it('Check API Request', () => {
      cy.request('https://petstore.swagger.io/v2/store/inventory').then((result)=>{

        expect(result).to.have.property('status', 200)
        expect(result.body).to.not.be.null

        Object.entries(result.body).forEach(element =>{
          cy.log(element[0] +' ' + element[1])
        })
      })
    })
})