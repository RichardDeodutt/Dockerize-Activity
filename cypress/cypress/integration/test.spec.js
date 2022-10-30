describe('Heading', () => {
    it('has the right title', () => {
        cy.visit('http://nginx:80;')

        cy.get('title')
            .invoke('text')
            .should("equal", "URL Shortener")
    });

});