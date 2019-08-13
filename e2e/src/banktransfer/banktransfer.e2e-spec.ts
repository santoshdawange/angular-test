import { BankTransferPage } from './banktransfer.po';
import { LoginPage } from '../login/login.po';
import { browser, By } from 'protractor';
import { Router } from '@angular/router';

describe('Bank Transfer page tests', () => {
    let page: BankTransferPage;
    let loginpage: LoginPage;
    let router: Router;

    beforeEach(() => {
        page = new BankTransferPage();
        loginpage = new LoginPage();
        page.navigateTo();
    });

    it('on click should redirect to new transaction', () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            page.getNewTransactionBtn().click().then(function() {
                browser.waitForAngular();
                expect(browser.driver.getCurrentUrl()).toMatch('/newtransaction');
            });

        });
    });

    it('on click should redirect to view transaction', () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            page.getViewTransactionBtn().click().then(function() {
                browser.waitForAngular();
                expect(browser.driver.getCurrentUrl()).toMatch('/viewtransaction');
            });

        });
    });
});