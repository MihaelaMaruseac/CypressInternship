

describe('first test', function(){
    it('Visit the site', function() {
        cy.visit('https://example.cypress.io')
    })
    it('Find an element', function(){
        cy.contains('type')
    })
    it('Click an element', function(){
        cy.contains('type').click()
    })
    it('Make url assertion', function(){
        cy.url()
            .should('include','/commands/actions')
    })
    it('Gets, types and asserts', function(){
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')

    })
})