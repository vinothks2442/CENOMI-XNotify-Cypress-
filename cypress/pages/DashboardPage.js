export class DashboardPage {

    dashboardHeader = 'h6'; // Update locator
    xNotifyText = "(//span[text()='X Notifi'])[1]"; // Update locator if XNotify text is visible

    verifyDashboardPage() {
        cy.url().should('include', '/customer-portal');
        cy.contains('Notifi').should('be.visible');
        
    }

    verifyXNotifyDisplayed() {
        cy.contains('XNotifi').should('be.visible');
    } 
}