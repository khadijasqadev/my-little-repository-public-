/// <reference types="cypress" />

describe ('To Check out with invalid last name', ()=> {
        
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
    cy.wait(1000)

   
    cy.get('#shopping_cart_container').click()

    cy.wait(1000)
    cy.get('#checkout').click()
    cy.get('[placeholder="First Name"][type="text"]').type("secret")
    cy.get('[placeholder="Last Name"][type="text"]').type("!@#$%^")
    cy.get('[placeholder="Zip/Postal Code"][type="text"]').type("54810")
    cy.get('.header_secondary_container').scrollIntoView()
    cy.get("#continue").click()
    
})
})