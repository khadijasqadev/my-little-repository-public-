/// <reference types="cypress" />

describe ('Click on Text on the Filter button', ()=> {
        
        beforeEach('Login form', ()=> {
        
            cy.visit('https://www.saucedemo.com/')
            //found locator by tag name and attriubte value
            cy.get('input[placeholder="Username"]').type("standard_user")
            //found locator by Attribute name and value and type
            cy.get('[placeholder="Password"][type="password"]').type("secret_sauce")
            cy.get('#login-button').click()
            
        })
    it('Filters', ()=> {
        

        cy.get('[data-test="product_sort_container"]').select("Name (A to Z)").invoke("val")
        
    })
})