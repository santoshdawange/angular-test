import { browser, by, element } from 'protractor';

export class ViewTransactionPage {
    navigateTo(){
        return browser.get('/viewtransactiion');
    }

    getBackButton() {
        return browser.driver.findElement(by.id('back-btn'));
    }
}

