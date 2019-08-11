import { browser, by, element } from 'protractor';

export class BankTransferPage {
    navigateTo(){
        return browser.get('/banktransfer');
    }

    getNewTransactionBtn() {
        return browser.driver.findElement(by.id('newTransaction'));
    }

    getViewTransactionBtn() {
        return browser.driver.findElement(by.id('viewTransaction'));
    }
}

