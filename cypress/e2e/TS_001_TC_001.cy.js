/// <reference types="cypress" />

describe ('Sign in with valid password and valid username', ()=> {

    beforeEach("login",()=>
    {
        
        cy.visit("https://www.saucedemo.com/")

    })
   
    
    it('Login form' , ()=> {
        
        //found locator by tag name and attriubte value
        cy.get('input[placeholder="Username"]').type("standard_user")
        //found locator by Attribute name and value and type
        cy.get('[placeholder="Password"][type="password"]').type("secret_sauce")

        cy.get('#login-button').click() 
        
        
    })
})