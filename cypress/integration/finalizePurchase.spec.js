/// <reference types="cypress" />

describe('Finalize a purchase & check the order status', () => {
   // beforeEach(() => {
    //  cy.visit('/')
  //  })

        it('1. Finalize a purchase', () =>{
            
            cy.visit('/')
            cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
            cy.get('#topnav > .form-control').select('Cart')
            cy.get('#cart_quantity68').should('have.value', '1')

            cy.get('#cart_checkout2').click()
            cy.get('#accountFrm_accountguest').check()
            cy.get('#accountFrm > fieldset > .btn').click()
            cy.get('#guestFrm_firstname').type('User')
            cy.get('#guestFrm_lastname').type('Fake')
            cy.get('#guestFrm_email').type('user_fake@gmail.com')
            cy.get('#guestFrm_telephone').type('098653873878')
            cy.get('#guestFrm_address_1').type('str. abcd')
            cy.get('#guestFrm_city').type('Bristol')
            cy.get('select[name="zone_id"]').select('Bristol')
            cy.get('input[name="postcode"]').type('232453')
            cy.get('select[name="country_id"]').type('United Kingdom')
            cy.get('.col-md-12 > .btn-orange').click()
            cy.get('.maintext').contains('Checkout Confirmation')
            cy.get('#checkout_btn').click()
            cy.url().should('include', 'checkout/success')
            cy.get('.mb40 > :nth-child(4) > a').click()
            cy.get('.contentpanel > :nth-child(1) > .table > tbody > tr > :nth-child(1) > :nth-child(1)')
            //save OrderID
            cy.get("#maincontainer > div > div > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1)").invoke("text").then((text)=>{
                console.log(text.slice())
            })
        
            // cy.get('#maincontainer > div > div > div > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1) > br:nth-child(2)')
            //     .invoke('val')
            //     .then(orderID => cy.log(orderID));

            // save email
        })

        // it('2. Check the order status', () =>{
            
                
        // })

        it('3. Try to finalize a purchase with invalid email address', () =>{
            
            cy.visit('/')
            cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
            cy.get('#topnav > .form-control').select('Cart')
            cy.get('#cart_quantity68').should('have.value', '1')
        
            cy.get('#cart_checkout2').click()
            cy.get('#accountFrm_accountguest').check()
            cy.get('#accountFrm > fieldset > .btn').click()
            cy.get('#guestFrm_firstname').type('U123')
            cy.get('#guestFrm_lastname').type('Fake!@!')
            cy.get('#guestFrm_email').type('123423a')
            cy.get('#guestFrm_telephone').type('098653873878')
            cy.get('#guestFrm_address_1').type('str. AAA')
            cy.get('#guestFrm_city').type('Bristol')
            cy.get('select[name="zone_id"]').select('Bristol')
            cy.get('input[name="postcode"]').type('postcode')
            cy.get('select[name="country_id"]').type('United Kingdom')
            cy.get('.col-md-12 > .btn-orange').click()
        
            cy.get('.has-error > .help-block').contains('E-Mail Address does not appear to be valid!')
          })

})