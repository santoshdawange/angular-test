import { NewTransferPage } from './newtransaction.po';
import { LoginPage } from '../login/login.po';
import { browser, By } from 'protractor';
import { Router } from '@angular/router';
import { BankTransferPage } from '../banktransfer/banktransfer.po';

describe('New transaction page tests', () => {
    let page: NewTransferPage;
    let loginpage: LoginPage;
    let btpage: BankTransferPage;
    let ntpage: NewTransferPage;
    let router: Router;

    beforeEach(() => {
        page = new NewTransferPage();
        loginpage = new LoginPage();
        btpage = new BankTransferPage;
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

            btpage.getNewTransactionBtn().click().then(function() {
                browser.waitForAngular();
                expect(browser.driver.getCurrentUrl()).toMatch('/newtransaction');

                page.getBackButton().click().then(function() {
                    browser.waitForAngular();
                    expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');
                });
            });
        });
    });

    it('transaction form should be valid and submit button enabled', () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            btpage.getNewTransactionBtn().click().then(function() {
                browser.waitForAngular();
                expect(browser.driver.getCurrentUrl()).toMatch('/newtransaction');

                page.getcustNameTextbox().sendKeys('Test Name');
                page.getcustAddTextbox().sendKeys('Test Address');
                page.getcustomerNoTextbox().sendKeys('23423');
                page.getcustPhoneTextbox().sendKeys('9876543210');
                page.gettransferAmtTextbox().sendKeys('10000');
                page.getcurrencyTextbox().sendKeys('USD');
                page.getbaneBankTextbox().sendKeys('test bank');
                page.getbeneAccNoTextbox().sendKeys('123456789012');
                page.getpaymentDetailsTextbox().sendKeys('NetBanking');

                let form = page.getForm().getAttribute('class');
                expect(form).toContain('ng-valid');
                expect(page.getSubmitButton().isEnabled()).toBeTruthy();
            });
        });
    });

    it("should have submit button be disabled initially", () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            btpage.getNewTransactionBtn().click().then(function() {
                browser.waitForAngular();
                expect(browser.driver.getCurrentUrl()).toMatch('/newtransaction');

                expect(page.getSubmitButton().isEnabled()).toBeFalsy();
            });
        });
    });

    it('if transaction form input fields are blank, transaction form should be invalid', () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            btpage.getNewTransactionBtn().click().then(function() {
                browser.waitForAngular();
                expect(browser.driver.getCurrentUrl()).toMatch('/newtransaction');

                page.getcustNameTextbox().sendKeys('');
                page.getcustAddTextbox().sendKeys('');
                page.getcustomerNoTextbox().sendKeys('');
                page.getcustPhoneTextbox().sendKeys('');
                page.gettransferAmtTextbox().sendKeys('');
                page.getcurrencyTextbox().sendKeys('');
                page.getbaneBankTextbox().sendKeys('');
                page.getbeneAccNoTextbox().sendKeys('');
                page.getpaymentDetailsTextbox().sendKeys('');

                let form = page.getForm().getAttribute('class');
                expect(form).toContain('ng-invalid');
                expect(page.getSubmitButton().isEnabled()).toBeFalsy();
            });
        });
    });

    it('transaction form should be valid and submit button enabled and on click should post data and show succesful message', () => {
        loginpage.getEmailTextbox().sendKeys('admin@admin.com');
        loginpage.getPasswordTextbox().sendKeys('admin');

        expect(loginpage.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(loginpage.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        loginpage.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');

            btpage.getNewTransactionBtn().click().then(function() {
                browser.waitForAngular();
                expect(browser.driver.getCurrentUrl()).toMatch('/newtransaction');

                page.getcustNameTextbox().sendKeys('Test Name');
                page.getcustAddTextbox().sendKeys('Test Address');
                page.getcustomerNoTextbox().sendKeys('23423');
                page.getcustPhoneTextbox().sendKeys('9876543210');
                page.gettransferAmtTextbox().sendKeys('10000');
                page.getcurrencyTextbox().sendKeys('USD');
                page.getbaneBankTextbox().sendKeys('test bank');
                page.getbeneAccNoTextbox().sendKeys('123456789012');
                page.getpaymentDetailsTextbox().sendKeys('NetBanking');

                let form = page.getForm().getAttribute('class');
                expect(form).toContain('ng-valid');
                expect(page.getSubmitButton().isEnabled()).toBeTruthy();

                page.getSubmitButton().click().then(function() {
                    browser.waitForAngular();
                    expect(page.getFormSuccessfullyPostText().getText()).toEqual('Transaction submitted successfully.');
                });
            });
        });
    });

});