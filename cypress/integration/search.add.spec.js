/// <reference types="cypress" />

describe('Searching an item', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
        it('1. Search for an existent item', () => {
            cy.get('input[name="filter_keyword"]').type('Paper Towns by John Green{enter}')
            cy.get('.productname').contains('Paper Towns by John Green')
            cy.log('Item searched was successfully displayed')
        })

        it('2. Search for an inexistent item', () => {
            cy.get('input[name="filter_keyword"]').type('Pride and Prejudice by Jane Austen{enter}')
            cy.expect('a[href*="/product/search&keyword"]')
            cy.log('Item was not found (as expected)')
        })
  
        it('3. Search for an existent item using the selection list', () => {
            cy.get('#filter_keyword').click()
            cy.get('#category_65').click()
            cy.get('#category_selected').contains('Books').click()
            cy.get('.maintext').contains('Books')
            cy.get('ul.thumbnails > :nth-child(2) > :nth-child(1) > img').click()
            cy.get(':nth-child(1) > .thumbnail > :nth-child(1) > img').click()
            cy.get('.productname').contains('Paper Towns by John Green')
            cy.log('Item searched was successfully displayed')
        })

        it('4. Search using the magnifier', () => {
            cy.get('#filter_keyword').get('.button-in-search > .fa').click()
            cy.get('#keyword').type('book')
            cy.get('#category_id').click().type('Books{enter}')
            cy.get('#description').check()
            cy.get('#model').check()
            cy.get('#search_button').click()
            
            //cy.log('Item was found (as expected)')
          })

  
  })