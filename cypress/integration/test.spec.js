/// <reference types="cypress" />

describe('Register new customer', () => {
    beforeEach(() => {
      
      cy.visit('/')
    })
    it('7. Register with invalid email address ', () => {
        cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
        
        cy.contains('Continue').click()
  
        cy.get('input[name="firstname"]').type('Soft')
        cy.get('input[name="lastname"]').type('Testing')
        cy.get('[id="AccountFrm_email"]').type('testing')
        cy.get('input[name="telephone"]').type('0732784583')
        cy.get('input[name="address_1"]').type('str. ABC, nr. 2')
        cy.get('input[name="city"]').type('Edinburgh')
        cy.get('select[name="zone_id"]').select('Edinburgh')
        cy.get('input[name="postcode"]').type('232432')
        cy.get('select[name="country_id"]').type('United Kingdom')
        cy.get('input[name="loginname"]').type('Testing99')
        cy.get('input[name="password"]').type('Test123!')
        cy.get('input[name="confirm"]').type('Test123!')
        cy.get('[type="radio"]').check('0')
        cy.get('[type="checkbox"]').check('1')
  
        cy.contains('Continue').click()
  
        cy.url().should('include', 'account/create')
        cy.log('An alert has appeared')
      })
})
