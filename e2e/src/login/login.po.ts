import { browser, by, element } from 'protractor';

export class LoginPage {
    navigateTo(){
        return browser.get('/login');
    }

    getEmailTextbox() {
        return element(by.name('email'));
    }

    getPasswordTextbox() {
        return element(by.name('password'));
    }

    getErrorText() {
        return element(by.className('gen_error'));
    }

    getForm(){
        return element(by.className('login-form'));
    }

    getSubmitButton() {
        return browser.driver.findElement(by.id('btnSubmit'));
    }
}

