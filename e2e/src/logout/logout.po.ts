import { browser, by, element } from 'protractor';

export class LogoutPage {
    navigateTo(){
        return browser.get('/banktransfer');
    }

    getLogoutBtn() {
        return browser.driver.findElement(by.id('btn-logout'));
    }

    getDialogOkBtn() {
        return browser.driver.findElement(by.id('logout_ok'));
    }

    getDialogCancelBtn() {
        return browser.driver.findElement(by.id('logout_cancel'));
    }
}

