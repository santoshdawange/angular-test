import { LogoutPage } from './logout.po';
import { LoginPage } from '../login/login.po';
import { browser, By } from 'protractor';
import { Router } from '@angular/router';

describe('Logout tests', () => {
    let page: LogoutPage;
    let loginpage: LoginPage;
    let router: Router;

    beforeEach(() => {
        page = new LogoutPage();
        loginpage = new LoginPage();
        page.navigateTo();
    });

    it('on click logout button open dialog and click on ok should logged out and redirect to login', () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            page.getLogoutBtn().click().then(function() {
                browser.waitForAngular();
                page.getDialogOkBtn().click().then(function() {
                    browser.waitForAngular();
                    expect(browser.driver.getCurrentUrl()).toMatch('/login');
                });
            });

        });
    }, 10000);

    it('on click logout button open dialog and click on cancel should not logged out', () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            page.getLogoutBtn().click().then(function() {
                browser.waitForAngular();
                page.getDialogCancelBtn().click().then(function() {
                    browser.waitForAngular();
                    expect(browser.driver.getCurrentUrl()).not.toMatch('/login');
                });
            });

        });
    }, 10000);
});