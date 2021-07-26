import {Contact, General, Login, Notification, Password, Register, Specials} from '../support/POM/POM.spec.js'
/// <reference types="cypress" />

const fName = `M_${Date.now()}`
const emailAddress = `test_${Date.now()}@gmail.com`
const phoneNumber = Date.now()
const password = 'Name123!'
const password2 = 'Change1!'

describe('Tests', () => {
    beforeEach(() => {
        cy.visit('/')
        Login.getLoginPage().contains('Login or register').click()
        Login.getLoginName().type(fName)
        Login.getPassword().type(password)        
        Login.getSubmitButton().click()
        Login.selectHomeButton().contains('Home').click()
    })

    it('Register and login new customer with valid and unic data', () => {
        Login.getLoginPage().contains('Login or register').click()
        Register.getContinueButton().contains('Continue').click()        
        Register.getFirstName().type(fName)
        Register.getLastName().type('Testing!~!')
        Register.getEmail().type(emailAddress)
        Register.getTelephone().type(phoneNumber)
        Register.getAddress().type('str. ABC, nr. 3')
        Register.getCity().type('Edinburgh')
        Register.getZoneId().select('Edinburgh')
        Register.getPostcode().type('232453')
        Register.getCountryId().type('United Kingdom')
        Login.getLoginName().type(fName)
        Login.getPassword().type(password)
        Register.getConfPass().type(password)
        Register.getRadioB().check('0')
        Register.getCheckBox().check('1')
        Register.continue().click()
     })
    
    it('1. Add 2 rating highest items with at least 4 stars from Specials category to cart', () => {
        General.getMenu().select('Specials')
        Specials.getSort().select('Rating Highest').should('have.value','rating-DESC')
        Specials.getFirstProd().click()
        Specials.getStars().should('have.class', 'on')
        Specials.getProdOption().select('Lacewood').should('have.value', '619')
        Specials.addToCart().click()
        General.getMenu().select('Specials')
        Specials.getSort().select('Rating Highest').should('have.value','rating-DESC')
        Specials.getSecondProd().click()
        Specials.getStars().should('have.class', 'on')
        Specials.addToCart().click()
        // verify if the items was successfully added to cart
        Specials.getColCart().click()
        General.getUrl().should('include', 'product&product_id=55&key=55:e8db34041472435dcc7f2a7d608a09ac')
        General.getMenu().select('Cart')
        Specials.getCartProd().click()
        General.getUrl().should('include','product&product_id=93&key=93')
    })

    it('2. Check Contact us functionality', () =>{
        Contact.getContact().click()
        Contact.getFName().type(fName)
        Contact.getEmail().type(emailAddress)
        Contact.getBox().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        Contact.getSubmit().click()
        Contact.getConfirm().should('contain','Your enquiry has been successfully sent to the store owner!')
    })

    it('3. Set on the newsletter notifications', () =>{
        General.getMenu().select('Account')
        Notification.getNotif().click()
        Notification.getCheck().check()
        General.continue().click()
        General.getAlert().should('contain','Success: Your notification settings has been successfully updated!')
    })

    it('4. Change password with invalid confirm password', () =>{
        General.getMenu().select('Account')
        Password.getChangePass().click()
        Password.getActualPass().type(password)
        Password.getNewPass().type(password2)
        Password.getPassConfirm().type('Something')
        General.continue().click()
        General.getAlert().should('contain','Oops, there is an error with information provided!')
    })

    it('5. Change password with valid confirm password', () =>{
        General.getMenu().select('Account')
        Password.getChangePass().click()
        Password.getActualPass().type(password)
        Password.getNewPass().type(password2)
        Password.getPassConfirm().type(password2)
        General.continue().click()
        General.getAlert().should('contain','Success: Your password has been successfully updated.')
    })
})