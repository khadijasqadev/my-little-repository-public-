/// <reference types="cypress" />

describe ('To check if items can be removed from cart', ()=> {
        
    beforeEach('Login form', ()=> {
    
        cy.visit('https://www.saucedemo.com/')
        //found locator by tag name and attriubte value
        cy.get('input[placeholder="Username"]').type("standard_user")
        //found locator by Attribute name and value and type
        cy.get('[placeholder="Password"][type="password"]').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('#add-to-cart-sauce-labs-backpack').click()
 
        
    })
it('Shopping cart', ()=> {
   

   
    cy.get('#shopping_cart_container').click()
    cy.wait(4000)
    cy.get('#remove-sauce-labs-backpack').click()
})
})