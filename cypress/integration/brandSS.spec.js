/// <reference types="cypress" />

describe('Brand selection and sorting', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
        it('1. Select and sort products for Benefit brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(1) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'sort=p.price-ASC&limit=20')
            // cy.get('.thumbnail > .pricetag > .price > .pricenew').invoke('text').expect(price =>{
            // const $el = Cypress.$(cy.get(':nth-child(4) > .thumbnail > .pricetag > .price > .oneprice')
            // if ($el.text() == price){
            //     cy.log('Positive')
            // }
            // else{
            //     cy.log('Negative')
            // }
        })

        it('2. Select and sort products for Pantene brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(2) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', '17&sort=p.price-ASC&limit=20')

        })

        it('3. Select and sort products for MAC brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(3) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', '11&sort=p.price-ASC&limit=20')

        })

        it('4. Select and sort products for Lancome brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(4) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=15&sort=p.price-ASC&limit=20')
        })

        it('5. Select and sort products for Gucci brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(5) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length','1')
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length','2')
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=20&sort=p.price-ASC&limit=20')
        })

        it('6. Select and sort products for Giorgio Armani brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(6) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=19&sort=p.price-ASC&limit=20')
        })

        it('7. Select and sort products for Dove brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(7) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=18&sort=p.price-ASC&limit=20')
        })

        it('8. Select and sort products for Calvin Klein brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(8) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=13&sort=p.price-ASC&limit=20')
        })

        it('9. Select and sort products for Bvlgari brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(9) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=14&sort=p.price-ASC&limit=20')
        })

        it.only('10. Select and sort products for Sephora brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(10) > .image > a > .internal').click()
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',1)
            cy.get('.div.thumbnails.grid.row.list-inline').should('not.have.length',2)
            cy.skip()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=16&sort=p.price-ASC&limit=20')
        })

        it('11. Check out of stock items', () =>{
            cy.get('.nostock').contains('Out of Stock').click()
            cy.log('Find out of stock product')
        })
})