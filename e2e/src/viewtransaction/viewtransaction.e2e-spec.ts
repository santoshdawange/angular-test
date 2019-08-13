import { ViewTransactionPage } from './viewtransaction.po';
import { browser, By } from 'protractor';
import { Router } from '@angular/router';
import { LoginPage } from '../login/login.po';
import { BankTransferPage } from '../banktransfer/banktransfer.po';

describe('View Transaction tests', () => {
    let page: ViewTransactionPage;
    let loginpage: LoginPage;
    let btpage: BankTransferPage;
    let router: Router;

    beforeEach(() => {
        page = new ViewTransactionPage();
        loginpage = new LoginPage();
        btpage = new BankTransferPage();
        page.navigateTo();
    });

    it('on click on back should redirect to bank transfer', () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            btpage.getViewTransactionBtn().click().then(function() {
                browser.waitForAngular();
                expect(browser.driver.getCurrentUrl()).toMatch('/viewtransaction');

                page.getBackButton().click().then(function() {
                    browser.waitForAngular();
                    expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');
                });

            });

        });
    });
});