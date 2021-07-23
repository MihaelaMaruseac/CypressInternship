/// <reference types="cypress" />

describe('Check the Wishlist', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
        cy.get('input[name="loginname"]').type(fName)
        cy.get('input[name="password"]').type(password)        
        cy.get('button[type="submit"][title="Login"]').click()
    })

  const fName = `M_${Date.now()}`
  const emailAddress = `test_${Date.now()}@gmail.com`
  const phoneNumber = Date.now()
  const password = 'Name123!'

    it('Register and login new customer with valid and unic data', () => {
        cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
        cy.get('#accountFrm > fieldset > .btn').contains('Continue').click()        
        cy.get('input[name="firstname"]').type(fName)
        cy.get('input[name="lastname"]').type('Testing!~!')
        cy.get('[id="AccountFrm_email"]').type(emailAddress)
        cy.get('input[name="telephone"]').type(phoneNumber)
        cy.get('input[name="address_1"]').type('str. ABC, nr. 3')
        cy.get('input[name="city"]').type('Edinburgh')
        cy.get('select[name="zone_id"]').select('Edinburgh')
        cy.get('input[name="postcode"]').type('232453')
        cy.get('select[name="country_id"]').type('United Kingdom')
        cy.get('input[name="loginname"]').type(fName)
        cy.get('input[name="password"]').type(password)
        cy.get('input[name="confirm"]').type(password)
        cy.get('[type="radio"]').check('0')
        cy.get('[type="checkbox"]').check('1')
        cy.contains('Continue').click()
     })
    
  
    it('1. Add items to wishlist', () => {
        cy.get('#categorymenu').contains('Home').click()
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > :nth-child(1) > img').click()
        cy.get('#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large').click({force:true})
        cy.get(':nth-child(3) > .productname').click()
        cy.get('#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large > i').click()
        cy.get('.side_prd_list > :nth-child(1) > .productname').click()
        cy.get('#product > fieldset > div.wishlist > a.wishlist_add.btn.btn-large > i').click()
    })

    it('2. Verify items from wishlist', () => {
        cy.get('#categorymenu').contains('Home').click()
        cy.get('#topnav > .form-control').select('Account')
        cy.get('.side_account_list > :nth-child(2) > a').click()
        cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_50').contains('Skinsheen Bronzer Stick')
        cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_66').contains('Total Moisture Facial Cream')
        cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_68').contains('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15')
    })

    it('3. Remove 1 item from wishlist', () => {
        cy.get('#categorymenu').contains('Home').click()
        cy.get('#topnav > .form-control').select('Account')
        cy.get('.side_account_list > :nth-child(2) > a').click()
        cy.get('.wishlist_50 > :nth-child(6) > .btn-default > .fa').click()
        cy.get('#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div > table > tbody > tr.wishlist_50').should('not.exist')
        cy.get('.pull-right > .btn-default').contains('Continue Shopping')

    })
})