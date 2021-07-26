/// <reference types="cypress" />

import { General, Login } from "../support/POM/POM.spec"

describe('Check the Login functionality', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
        it('1. Login for a registered customer with valid data', () => {
            Login.getLoginPage().contains('Login or register').click()
            Login.getLoginName().type('Testing01')
            Login.getPassword().type('Test123!')
            Login.getSubmitButton().click()
            General.getUrl().should('include', 'account/account')
            Login.getBody().contains('h1', 'My Account')
            cy.log('Login succesfully')
        })
  
        it('2. Login for an unregistered customer', () => {
            cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
            cy.get('input[name="loginname"]').type('Joe1997')
            cy.get('input[name="password"]').type('joe9719!')
            cy.get('button[type="submit"][title="Login"]').click()
            cy.url().should('include', 'account/login')
            cy.get('.alert').contains("Error: Incorrect login or password provided.")
            cy.log('Login unsuccesfully')
        })

        it('3. Login registered customer with valid loginname and invalid password', () => {
            cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
            cy.get('input[name="loginname"]').type('Testing01')
            cy.get('input[name="password"]').type('Testest')
            cy.get('button[type="submit"][title="Login"]').click()
            cy.url().should('include', 'account/login')
            cy.get('.alert').contains("Error: Incorrect login or password provided.")
            cy.log('Login unsuccesfully')
        })

        it('4. Login for registered customer with invalid loginname and valid password', () => {
            cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
            cy.get('input[name="loginname"]').type('Testing2011')
            cy.get('input[name="password"]').type('Test123!')
            cy.get('button[type="submit"][title="Login"]').click()
            cy.url().should('include', 'account/login')
            cy.get('.alert').contains("Error: Incorrect login or password provided.")
            cy.log('Login unsuccesfully')
        })

        it('5. Login for registered customer with valid loginname and blank password', () => {
            cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
            cy.get('input[name="loginname"]').type('Testing2011')
            cy.get('button[type="submit"][title="Login"]').click()
            cy.url().should('include', 'account/login')
            cy.get('.alert').contains("Error: Incorrect login or password provided.")
            cy.log('Login unsuccesfully')
        })

        it('6. Login with empty fields', () => {
            cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
            cy.get('button[type="submit"][title="Login"]').click()
            cy.url().should('include', 'account/login')
            cy.get('.alert').contains("Error: Incorrect login or password provided.")
            cy.log('Login unsuccesfully')
        })
})
  