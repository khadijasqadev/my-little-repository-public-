/// <reference types="cypress" />

describe ('To check if empty checkout form is submitted', ()=> {
        
    beforeEach('Login form', ()=> {
    
        cy.visit('https://www.saucedemo.com/')
        //found locator by tag name and attriubte value
        cy.get('input[placeholder="Username"]').type("standard_user")
        //found locator by Attribute name and value and type
        cy.get('[placeholder="Password"][type="password"]').type("secret_sauce")
        cy.get('#login-button').click()

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
   
        
    })
it('Checkout buttons', ()=> {
    cy.wait(500)

   
   
    cy.get('#shopping_cart_container').click()

    cy.wait(500)
    cy.get('#checkout').click()
   
    cy.get("#continue").click()
    cy.get('.header_secondary_container').scrollIntoView()
})
})