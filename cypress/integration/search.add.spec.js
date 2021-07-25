/// <reference types="cypress" />

describe('Searching an item', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
        it('1. Search for an existent item', () => {
            cy.get('input[name="filter_keyword"]').type('Paper Towns by John Green{enter}')
            cy.get('.productname').contains('Paper Towns by John Green')
        })

        it('2. Search for an inexistent item', () => {
            cy.get('input[name="filter_keyword"]').type('Pride and Prejudice by Jane Austen{enter}')
            cy.expect('a[href*="/product/search&keyword"]')
            cy.log('Item was not found (as expected)')
        })
  
        it('3. Search for existent items using the selection list', () => {
            cy.get('#filter_keyword').click()
            cy.get('#category_65').click().type('{enter}')
            cy.get('#category_id').should('contain','Books')
            cy.get('#keyword').type('book')
            cy.get('#description').check()
            cy.get('#search_button').click()
            cy.get(':nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').should('exist')
            cy.get(':nth-child(2) > .fixed_wrapper > .fixed > .prdocutname').should('exist')
        })

        it('4. Search using the magnifier', () => {
            cy.get('#filter_keyword').get('.button-in-search > .fa').click()
            cy.get('#keyword').type('book')
            cy.get('#category_id').select('Books').should('have.value', '0,65')
            cy.get('#description').check()
            cy.get('#model').check()
            cy.get('#search_button').click()
            cy.get(':nth-child(2) > .thumbnail > :nth-child(1) > img').click()
            cy.get('.easyzoom > .local_image > img').should('exist')
          })

          it('5. Search invalid citeria in category using the magnifier', () => {
            cy.get('#filter_keyword').get('.button-in-search > .fa').click()
            cy.get('#keyword').type('book')
            cy.get('#category_id').select('Makeup').should('have.value', '0,36')
            cy.get('#description').check()
            cy.get('#search_button').click()
            cy.get('.maintext').contains('Search')
            cy.get('.contentpanel > :nth-child(4)').contains('There is no product that matches the search criteria.')
          })     
  })

describe('Add an item to cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

        it('1. Add an existent item from Home page to cart', () =>{
            cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
            cy.get('#topnav > .form-control').select('Cart')
            cy.get('#cart_quantity68').should('have.value', '1')
            cy.get('tbody > :nth-child(2) > :nth-child(2) > a').click()
            cy.url().should('include', '/product&product_id=68&key=68')
        })

        it('2. Add an existent item from category page to cart', () =>{
            cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=43"]').click()
            cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click()
            cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').click()
            cy.get('.cart').click()
            cy.get('#topnav > .form-control').select('Cart')
            cy.get('#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2)').should('exist')
        })
})