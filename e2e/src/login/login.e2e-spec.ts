import { LoginPage } from './login.po';
import { browser, By } from 'protractor';
import { Router } from '@angular/router';

describe('Login tests', () => {
    let page: LoginPage;
    let router: Router;

    beforeEach(() => {
        page = new LoginPage();
        page.navigateTo();
    });

    it('Login form should be valid and login button enabled', () => {
        page.getEmailTextbox().sendKeys('admin@admin.com');
        page.getPasswordTextbox().sendKeys('admin');

        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-valid');
        expect(page.getSubmitButton().isEnabled()).toBeTruthy();
    });

    it("should have login button be disabled initially", () => {
        expect(page.getSubmitButton().isEnabled()).toBeFalsy();
    })

    it('if login form input fields are blank, Login form should be invalid', () => {
        page.getEmailTextbox().sendKeys('');
        page.getPasswordTextbox().sendKeys('');
        
        let form = page.getForm().getAttribute('class');
        expect(form).toContain('ng-invalid');
    });

    it('Should throw error of email and password are not matched.', () => {
        page.getEmailTextbox().sendKeys('xyz@admin.com');
        page.getPasswordTextbox().sendKeys('admin');

        page.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(page.getErrorText().getText()).toContain('email password not matched');
            expect(browser.driver.getCurrentUrl()).toMatch('/login');
        });
    });

    it('Should logged in', () => {
        page.getEmailTextbox().sendKeys('admin@admin.com');
        page.getPasswordTextbox().sendKeys('admin');

        expect(page.getEmailTextbox().getAttribute('value')).toEqual('admin@admin.com');
        expect(page.getPasswordTextbox().getAttribute('value')).toEqual('admin');

        page.getSubmitButton().click().then(function() {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/banktransfer');
        });
    });
});