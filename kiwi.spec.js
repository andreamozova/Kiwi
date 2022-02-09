/// <reference types="Cypress" />

it.only('Stage 1',() => {
    window.localStorage.setItem('bookingcom_extension_default', 'false')
    const destination = 'New York'
    cy.setCookie('__kwc_agreed', 'true')
    cy.visit('https://www.kiwi.com/en')
    cy.get('[data-test="PlacePickerInputPlace"]').should('have.contain','Vienna')
    cy.get('[data-test="PlacePickerInput-destination"]').find('[data-test="SearchField-input"]').type(destination)
    cy.get('[data-test="PlacepickerModalOpened-destination"]').should('be.visible').contains(destination).click()
    cy.get('[data-test="LandingSearchButton"]').click()
    cy.get('[data-test="ResultCardPrice"]').should('have.contain', '€')
    cy.get('[data-test="RegionalSettingsButton"]').contains('EUR').click()
    cy.get('[data-test="CurrencySelect"]').select('United States dollar - USD')
    cy.get('[data-test="SubmitRegionalSettingsButton"]').contains('Save & continue').click()
    cy.get('[data-test="ResultCardPrice"]').should('have.contain', '$')
 })
 

it('Stage 2', () => {
    window.localStorage.setItem('bookingcom_extension_default', 'false')
    cy.setCookie('__kwc_agreed', 'true')
    cy.visit('https://www.kiwi.com/en/cheap-flights/london-united-kingdom/istanbul-turkey/')
    cy.get('.Grid__StyledGrid-sc-9eqnnl-0 > :nth-child(1)').click()
    cy.get('[data-test="SearchFormModesPicker-active-oneWay"]').should('have.contain', 'One-way') 
 })
 