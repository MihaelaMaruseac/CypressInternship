/// <reference types="cypress" />

const fName = `M_${Date.now()}`
const emailAddress = `test_${Date.now()}@gmail.com`
const phoneNumber = Date.now()
const password = 'Name123!'
let address1, address2, orderId, status

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
  
    it('1. Add 4 items to cart', () => {
        // product from Apparel and Accesories category
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()
        cy.get('ul.thumbnails > :nth-child(1) > :nth-child(1) > img').click()
        cy.get(':nth-child(2) > .thumbnail > :nth-child(1) > img').click()
        cy.get('.cart').click()
        // product from Skincare category
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click()
        cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click()
        cy.get(':nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
        // product from Haircare category
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').click()
        cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click()
        cy.get(':nth-child(2) > .thumbnail > :nth-child(1) > img').click()
        cy.get('.cart').click()
        // product from Books category
        cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=65"]').click()
        cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click()
        cy.get(':nth-child(3) > .thumbnail > :nth-child(1) > img').click()
        cy.get('.cart').click()

    })

    it('2. Remove shoes from cart & update quantity for book & verify the address & check order status', () => {
        cy.get('#topnav > .form-control').select('Cart')
        cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(1)').get(':nth-child(2) > :nth-child(7) > .btn').click()
        cy.get('.product-list').should('not.contain', 'Womens high heel point toe stiletto sandals ankle strap court shoes - Colour black')
        // update cart quantity and verify the update
        cy.xpath('/html/body/div/div[2]/div/div/div/form/div/div[1]/table/tbody/tr[3]/td[5]/div/input').click().clear().type('2{enter}')
          .should('have.value', '2')
        // verify if the address is the default one
        cy.get('#cart_checkout2').click()
        cy.get('#checkout_btn').click()
        cy.get('.mb40 > :nth-child(4) > a').click()
        cy.get(':nth-child(2) > address').invoke("text").then((text)=>{
            address2 = text  
            cy.log(address2)
        })
            // get the default address (address1)
        cy.get('.side_account_list > :nth-child(5) > a').click()
        cy.get('address').invoke("text").then((text)=>{
            address1 = text  
            cy.log(address1)
            cy.wrap(address2).should('eq', address1);
        })
        //check the order status
        cy.get('.side_account_list > :nth-child(6) > a').click()
        cy.get('[style="width: 49%; float: left; margin-bottom: 2px;"]').invoke("text").then((text)=>{
            cy.log("id: ", text)
            orderId = text.substring(10).split('#')[1]
            cy.log(orderId)
            cy.get('#topnav > .form-control').select('Check Your Order')
            cy.get("#maincontainer > div > div.col-md-9.col-xs-12.mt20 > div > div > div.container-fluid.mt20").find('[style="width: 49%; float: left; margin-bottom: 2px;"]').contains(`${orderId}`)
            cy.get('[style="width: 49%; float: right; margin-bottom: 2px; text-align: right;"]').invoke("text").then((text)=>{
                status = text  
                cy.log(status)
            cy.get('[style="width: 49%; float: right; margin-bottom: 2px; text-align: right;"]').contains('Pending')
            })
        })
    })
})