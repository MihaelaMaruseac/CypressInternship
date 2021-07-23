/// <reference types="cypress" />

const fName = `M_${Date.now()}`
const emailAddress = `test_${Date.now()}@gmail.com`
const phoneNumber = Date.now()
const password = 'Name123!'
const password2 = 'Change1!'

describe('Check the Cart', () => {
    beforeEach(() => {
      
        cy.visit('/')

        cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
    
        cy.get('input[name="loginname"]').type(fName)
        cy.get('input[name="password"]').type(password)        
        cy.get('button[type="submit"][title="Login"]').click()
        cy.get('#categorymenu').contains('Home').click()
    })


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
    
  
    it('1. Add 2 rating highest items with at least 4 stars from Specials category to cart', () => {
        cy.get('#topnav > .form-control').select('Specials')
        cy.get('#sort').select('Rating Highest').should('have.value','rating-DESC')
        cy.get(':nth-child(1) > .thumbnail > :nth-child(2) > img').click()
        cy.get('.rate > :nth-child(4)').should('have.class', 'on')
        cy.get('#option306').select('Lacewood').should('have.value', '619')
        cy.get('.cart').click()

        cy.get('#topnav > .form-control').select('Specials')
        cy.get('#sort').select('Rating Highest').should('have.value','rating-DESC')
        cy.get(':nth-child(2) > .thumbnail > :nth-child(2) > img').click()
        cy.get('.rate > :nth-child(4)').should('have.class', 'on')
        cy.get('.cart').click()
        // verify if the items was successfully added to cart
        cy.get('.table > tbody > :nth-child(2) > :nth-child(2) > a').click()
        cy.url().should('include', 'product&product_id=55&key=55:e8db34041472435dcc7f2a7d608a09ac')
        cy.get('#topnav > .form-control').select('Cart')
        cy.get('tbody > :nth-child(3) > :nth-child(2) > a').click()
        cy.url().should('include','product&product_id=93&key=93')
    })

    it('2. Check Contact us functionality', () =>{
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type(fName)
        cy.get('#ContactUsFrm_email').type(emailAddress)
        cy.get('#ContactUsFrm_enquiry').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('contain','Your enquiry has been successfully sent to the store owner!')
    })

    it('3. Set on the newsletter notifications', () =>{
        cy.get('#topnav > .form-control').select('Account')
        cy.get('.side_account_list > :nth-child(9) > a').click()
        cy.get('#imFrm_settingsnewsletteremail').check()
        cy.get('.col-md-12 > .btn-orange').click()
        cy.get('.alert').should('contain','Success: Your notification settings has been successfully updated!')
    })

    it('4. Change password with invalid confirm password', () =>{
        cy.get('#topnav > .form-control').select('Account')
        cy.get('#maincontainer > div > div.column_right.col-md-3.col-xs-12.mt20 > div.sidewidt > div > ul > li:nth-child(4) > a > i').click()
        cy.get('#PasswordFrm_current_password').type(password)
        cy.get('#PasswordFrm_password').type(password2)
        cy.get('#PasswordFrm_confirm').type('Something')
        cy.get('.col-md-12 > .btn-orange').click()
        cy.get('.alert').should('contain','Oops, there is an error with information provided!')
    })

    it('5. Change password with valid confirm password', () =>{
        cy.get('#topnav > .form-control').select('Account')
        cy.get('.side_account_list > :nth-child(4) > a').click()
        cy.get('#PasswordFrm_current_password').type(password)
        cy.get('#PasswordFrm_password').type(password2)
        cy.get('#PasswordFrm_confirm').type(password2)
        cy.get('.col-md-12 > .btn-orange').click()
        cy.get('.alert').should('contain','Success: Your password has been successfully updated.')
    })

    
})