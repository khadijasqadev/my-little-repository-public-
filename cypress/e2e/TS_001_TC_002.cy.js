/// <reference types="cypress" />

describe ('Sign in with invalid password and valid username', ()=> {

   beforeEach("login",()=>
    {
        
        cy.visit("https://www.saucedemo.com/")
        

    })
    it('Login form', ()=> {
        cy.visit("https://www.saucedemo.com/")
        
        //found locator by tag name and attriubte value
        cy.get('input[placeholder="Username"]').type("standard_user")
        //found locator by Attribute name and value and type
        cy.get('[placeholder="Password"][type="password"]').type("1234")

        cy.get('#login-button').click() 
        
        
    })
})