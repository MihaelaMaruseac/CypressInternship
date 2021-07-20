/// <reference types="cypress" />

describe('Check the Register functionality', () => {
  beforeEach(() => {
      cy.visit('/')
  })

    it('1. Register new customer with valid and unic data', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()

      // cy.contains('Continue').click()
      cy.get('#accountFrm > fieldset > .btn').contains('Continue').click()

      const fName = `M_${Date.now()}`
      const emailAddress = `test_${Date.now()}@gmail.com`
      const phoneNumber = Date.now()

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
      cy.get('input[name="password"]').type('Name123!')
      cy.get('input[name="confirm"]').type('Name123!')
      cy.get('[type="radio"]').check('0')
      cy.get('[type="checkbox"]').check('1')

      cy.contains('Continue').click()
      //cy.get('.col-md-2 > .btn').contains('Continue')

      cy.url().should('include', 'account/success')
      cy.get('.maintext').contains('Your Account Has Been Created!')
      cy.log('Registration successful')
    })

    //account used for testing
    it('2. Register an existing customer', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
      
      //cy.get('[data-top="644"]').should('have.css' 'title' 'Continue')
      cy.contains('Continue').click()

      cy.get('input[name="firstname"]').type('Software')
      cy.get('input[name="lastname"]').type('Testing')
      cy.get('[id="AccountFrm_email"]').type('testing@gmail.com')
      cy.get('input[name="telephone"]').type('0732784583')
      cy.get('input[name="address_1"]').type('str. Pacii, nr. 2')
      cy.get('input[name="city"]').type('Edinburgh')
      cy.get('select[name="zone_id"]').select('Edinburgh')
      cy.get('input[name="postcode"]').type('232432')
      cy.get('select[name="country_id"]').type('United Kingdom')
      cy.get('input[name="loginname"]').type('Testing01')
      cy.get('input[name="password"]').type('Test123!')
      cy.get('input[name="confirm"]').type('Test123!')
      cy.get('[type="radio"]').check('0')
      cy.get('[type="checkbox"]').check('1')

      cy.contains('Continue').click()
      cy.url().should('include', 'account/create')
      cy.get('.alert').contains('Error: E-Mail Address is already registered!')
      cy.log('Registration unsuccessful')
    })

    it('3. Register with invalid confirm password', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
    
      cy.contains('Continue').click()

      cy.get('input[name="firstname"]').type('Mobile')
      cy.get('input[name="lastname"]').type('Testing')
      cy.get('[id="AccountFrm_email"]').type('mob_testing@gmail.com')
      cy.get('input[name="telephone"]').type('0735684583')
      cy.get('input[name="address_1"]').type('str. XYZ, nr. 2')
      cy.get('input[name="city"]').type('Edinburgh')
      cy.get('select[name="zone_id"]').select('Edinburgh')
      cy.get('input[name="postcode"]').type('232432')
      cy.get('select[name="country_id"]').type('United Kingdom')
      cy.get('input[name="loginname"]').type('Testing02')
      cy.get('input[name="password"]').type('Test123!')
      cy.get('input[name="confirm"]').type('test')
      cy.get('[type="radio"]').check('0')
      cy.get('[type="checkbox"]').check('1')

      cy.contains('Continue').click()

      cy.url().should('include', 'account/create')
      cy.get('.alert').contains('Password confirmation does not match password!')
      cy.log('Registration unsuccessful')
    })
  

    it('4. Register with invalid data', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
    
      cy.contains('Continue').click()

      cy.get('input[name="firstname"]').type('Mobile321')
      cy.get('input[name="lastname"]').type('Testing!~!')
      cy.get('[id="AccountFrm_email"]').type('mob_testing')
      cy.get('input[name="telephone"]').type('There is no a phone number')
      cy.get('input[name="address_1"]').type('!!!#$')
      cy.get('input[name="city"]').type('Z2!@!')
      cy.get('input[name="postcode"]').type('postcode')
      cy.get('select[name="country_id"]').type('-1')
      cy.get('input[name="loginname"]').type('12')
      cy.get('input[name="password"]').type('123')
      cy.get('input[name="confirm"]').type('test')
      cy.get('[type="radio"]').check('0')
      cy.get('[type="checkbox"]').check('1')

      cy.contains('Continue').click()

      cy.url().should('include', 'account/create')
      cy.get('.alert').contains('Login name must be alphanumeric only and between 5 and 64 characters!')
      cy.get('.alert').contains('Email Address does not appear to be valid!')
      cy.get('.alert').contains('Please select a region / state!')
      cy.get('.alert').contains('Password must be between 4 and 20 characters!')
      cy.get('.alert').contains('Password confirmation does not match password!')
      cy.log('Registration unsuccessful')
    })

    it('5. Register without check the radio box and the checkbox', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
    
      cy.contains('Continue').click()

      cy.get('input[name="firstname"]').type('Mobile')
      cy.get('input[name="lastname"]').type('Testing')
      cy.get('[id="AccountFrm_email"]').type('mob_testing@gmail.com')
      cy.get('input[name="telephone"]').type('0735684583')
      cy.get('input[name="address_1"]').type('str. XYZ, nr. 2')
      cy.get('input[name="city"]').type('Edinburgh')
      cy.get('select[name="zone_id"]').select('Edinburgh')
      cy.get('input[name="postcode"]').type('232432')
      cy.get('select[name="country_id"]').type('United Kingdom')
      cy.get('input[name="loginname"]').type('Testing02')
      cy.get('input[name="password"]').type('Test123!')
      cy.get('input[name="confirm"]').type('Test123!')

      cy.contains('Continue').click()

      cy.url().should('include', 'account/create')
      cy.get('.alert').contains('Error: You must agree to the Privacy Policy!')
      cy.log('Registration unsuccessful')
    })

    it('6. Register without complete some of the address mandatory fields', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
    
      cy.contains('Continue').click()

      cy.get('input[name="firstname"]').type('Mobile')
      cy.get('input[name="lastname"]').type('Testing')
      cy.get('[id="AccountFrm_email"]').type('mob_testing@gmail.com')
      cy.get('input[name="telephone"]').type('0735684583')
      cy.get('input[name="city"]').type('Edinburgh')
      cy.get('select[name="country_id"]').type('United Kingdom')
      cy.get('input[name="loginname"]').type('Testing02')
      cy.get('input[name="password"]').type('Test123!')
      cy.get('input[name="confirm"]').type('Test123!')
      cy.get('[type="radio"]').check('0')
      cy.get('[type="checkbox"]').check('1')

      cy.contains('Continue').click()

      cy.url().should('include', 'account/create')
      cy.get('.alert').contains('Address 1 must be between 3 and 128 characters!')
      cy.get('.alert').contains('Zip/postal code must be between 3 and 10 characters!')
      cy.get('.alert').contains('Please select a region / state!')
      cy.log('Registration unsuccessful')
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
      cy.get('.alert').contains('Email Address does not appear to be valid!')
      cy.log('Registration unsuccessful')
    })

    it('8. Register with blank and empty fields ', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
      
      cy.contains('Continue').click()

      cy.contains('Continue').click()

      cy.url().should('include', 'account/create')
      cy.get('.alert').contains('Error: You must agree to the Privacy Policy!')
      cy.log('Registration unsuccessful')
    })

    it('9. Register with empty fields and checked Privacy Policy checkbox', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
      
      cy.contains('Continue').click()

      cy.get('[type="checkbox"]').check('1')

      cy.contains('Continue').click()

      cy.url().should('include', 'account/create')
      cy.get('.alert').contains('Login name must be alphanumeric only and between 5 and 64 characters!')
      cy.get('.alert').contains('First Name must be between 1 and 32 characters!')
      cy.get('.alert').contains('Last Name must be between 1 and 32 characters!')
      cy.get('.alert').contains('Email Address does not appear to be valid!')
      cy.get('.alert').contains('Address 1 must be between 3 and 128 characters!')
      cy.get('.alert').contains('City must be between 3 and 128 characters!')
      cy.get('.alert').contains('Zip/postal code must be between 3 and 10 characters!')
      cy.get('.alert').contains('Please select a region / state!')
      cy.get('.alert').contains('Password must be between 4 and 20 characters!')
      cy.log('Registration unsuccessful')
    })
  
    it('10. Register with short phone number, address and city fields completed with space character ', () => {
      cy.get('a[href*="/index.php?rt=account/login"]').contains('Login or register').click()
      
      cy.contains('Continue').click()

      cy.get('input[name="firstname"]').type('User')
      cy.get('input[name="lastname"]').type('y   s')
      cy.get('[id="AccountFrm_email"]').type(`fake_${Date.now()}@gmail.com`)
      cy.get('input[name="telephone"]').type('02')
      cy.get('input[name="address_1"]').type('      ')
      cy.get('input[name="city"]').type('   ')
      cy.get('select[name="zone_id"]').select('Edinburgh')
      cy.get('input[name="postcode"]').type('232432')
      cy.get('select[name="country_id"]').type('United Kingdom')
      cy.get('input[name="loginname"]').type(`User${Date.now()}`)
      cy.get('input[name="password"]').type('rowtype')
      cy.get('input[name="confirm"]').type('rowtype')
      cy.get('[type="radio"]').check('1')
      cy.get('[type="checkbox"]').check('1')

      cy.contains('Continue').click()

      cy.url().should('not.include', 'account/success')
      cy.log('Registration unsuccessful because of wrong data')
    })
})