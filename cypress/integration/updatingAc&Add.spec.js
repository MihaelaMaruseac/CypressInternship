/// <reference types="cypress" />

describe('Updating Account details', () => {
    beforeEach(() => {
      cy.visit('/')

      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()

        cy.get('input[name="loginname"]').type('Testing01')
        cy.get('input[name="password"]').type('Test123!')
        cy.get('button[type="submit"][title="Login"]').click()
    })
  
    it('1. Valid edit of account details', () => {
        cy.get('.side_account_list > :nth-child(3) > a').click()
        cy.get('#AccountFrm_firstname').clear().type('Soft').should('have.value','Soft')
        cy.get('#AccountFrm_lastname').clear().type('Test').should('have.value','Test')
        cy.get('#AccountFrm_email').clear().type('test123@gmail.com').should('have.value','test123@gmail.com')
        cy.get('#AccountFrm_telephone').clear().type('2345765432').should('have.value', '2345765432')
        cy.get('.col-md-12 > .btn-orange').click()
        cy.get('.alert').contains('Success: Your account has been successfully updated.')
        // reset the email address for avoiding fail check oreder status
        cy.get('.side_account_list > :nth-child(3) > a').click()
        cy.get('#AccountFrm_email').clear().type('testing@gmail.com').should('have.value','testing@gmail.com')
        cy.get('.col-md-12 > .btn-orange').click()
    })

    it('2. Add a new default address', () => {
        cy.get('.side_account_list > :nth-child(5) > a').click()
        cy.get('.col-md-12 > .btn-orange').click()
        cy.get('#AddressFrm_firstname').type('User')
        cy.get('#AddressFrm_lastname').type('None')
        cy.get('#AddressFrm_address_1').type('str. Till')
        cy.get('#AddressFrm_city').type('Edinburgh')
        cy.get('#AddressFrm_zone_id').select('Edinburgh')
        cy.get('#AddressFrm_postcode').type('908802')
        cy.get('#AddressFrm_country_id').type('United Kingdom')
        cy.get('#AddressFrm_default1').check()
        cy.get('.col-md-12 > .btn-orange').click()
        cy.get('.alert').contains('Your address has been successfully inserted')
    })

    it.only('3. Remove the old address', () => {
        cy.get('.side_account_list > :nth-child(5) > a').click()
        cy.get('button').each(() =>{
            cy.get(':nth-child(2) > table > tbody > tr > .pull-right > .btn-default').click()
        })
        cy.get('.alert').contains('Your address has been successfully deleted')


    })


  
  
  
  })