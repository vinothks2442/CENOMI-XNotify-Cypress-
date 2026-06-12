import 
{  
    loginPage,
    dashboardPage,
} from '../pages/PageLoader';

describe('Xnotify Login', () => {
    it('Login successfully', () => {
        cy.fixture('testData').then((data) => {
            loginPage.visit();
            loginPage.login(
                data.adminUser.username,
                data.adminUser.password
            );

        });
             dashboardPage.verifyDashboardPage();
             dashboardPage.verifyXNotifyDisplayed();

    });

       it('Login successfully', () => {
        cy.fixture('testData').then((data) => {
            loginPage.visit();
            loginPage.login(
                data.adminUser.username,
                data.adminUser.password
            );

        });
             dashboardPage.verifyDashboardPage();
             dashboardPage.verifyXNotifyDisplayed();

    });

});