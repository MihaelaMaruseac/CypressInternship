/// <reference types="cypress" />

describe('Brand selection and sorting', () => {
    beforeEach(() => {
        cy.visit('/')
    })
  
        it('1. Select and sort products for Benefit brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(1) > .image > a > .internal').click()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'sort=p.price-ASC&limit=20')
            
            const elements = [];
            const unsortedElements = [];
            cy.get('.price').each(($el, $index) =>{
                if($el[0].parentNode.className === 'pricetag jumbotron'){ // to remove duplicates
                    elements.push($el);
                    unsortedElements.push($el)
                }
            }).then(() => {
                elements.sort((a,b)=>{
                    const firstValue = parseFloat(a[0].children[0].innerHTML.split('$')[1]); // children[0] has either oneprice class or pricenew class
                    const secondValue = parseFloat(b[0].children[0].innerHTML.split('$')[1]);
                    return firstValue-secondValue;
                });
                cy.wrap(unsortedElements).should('deep.eq', elements);
            })
        })

        it('2. Select and sort products for Pantene brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(2) > .image > a > .internal').click()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', '17&sort=p.price-ASC&limit=20')

        })

        it('3. Select and sort products for MAC brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(3) > .image > a > .internal').click()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', '11&sort=p.price-ASC&limit=20')

        })

        it('4. Select and sort products for Lancome brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(4) > .image > a > .internal').click()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=15&sort=p.price-ASC&limit=20')
        })

        it('5. Select and sort products for Giorgio Armani brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(6) > .image > a > .internal').click()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=19&sort=p.price-ASC&limit=20')
        })

        it('6. Select and sort products for Dove brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(7) > .image > a > .internal').click()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=18&sort=p.price-ASC&limit=20')
        })

        it('7. Select and sort products for Calvin Klein brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(8) > .image > a > .internal').click()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=13&sort=p.price-ASC&limit=20')
        })

        it('8. Select and sort products for Bvlgari brand', () => {

            cy.get('#popularbrands > .container-fluid').should('contain', 'Brands Scrolling List')
            cy.get(':nth-child(9) > .image > a > .internal').click()
            cy.get('#sort').select('Price Low > High').should('have.value','p.price-ASC')
            cy.url().should('include', 'id=14&sort=p.price-ASC&limit=20')
        })

        it('9. Check out of stock items', () =>{
            cy.get('.nostock').contains('Out of Stock').click()
            cy.log('Find out of stock product')
        })
})