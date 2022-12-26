/// <reference types="cypress" />

describe ('To check if filtering is done in low to high pricing order', ()=> {
        
    beforeEach('Login form', ()=> {
    
        cy.visit('https://www.saucedemo.com/')
        //found locator by tag name and attriubte value
        cy.get('input[placeholder="Username"]').type("standard_user")
        //found locator by Attribute name and value and type
        cy.get('[placeholder="Password"][type="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        
    })
    it('Filters', ()=> {
      

        cy.get('[data-test="product_sort_container"]').select("Price (low to high)").invoke("val")
        //cy.get('[option="az"]').click()
        
    })
})
