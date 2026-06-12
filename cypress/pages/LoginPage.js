export class LoginPage {

    usernameTxt = '//input[@id="email"]';
    passwordTxt = '//input[@id="password"]';
    loginBtn = '//button[@type="submit"]';

    visit() {
        cy.visit('/');
    }

    validateURL(){
        cy.url().should('include', 'xnotify')
    }

    enterUsername(username) {
        cy.xpath(this.usernameTxt).type(username);
    }

    enterPassword(password) {
        cy.xpath(this.passwordTxt).type(password);
    }

    clickLogin() {
        cy.xpath(this.loginBtn).click();
    }

    varifyDashboardNavigation(){
        cy.get()
    }

    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
        this.validateURL();
    }
}
