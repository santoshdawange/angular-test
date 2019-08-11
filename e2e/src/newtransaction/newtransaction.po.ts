import { browser, by, element } from 'protractor';

export class NewTransferPage {
    navigateTo(){
        return browser.get('/banktransfer');
    }

    getBackButton() {
        return browser.driver.findElement(by.id('back-btn'));
    }

    getSubmitButton() {
        return browser.driver.findElement(by.id('submit-btn'));
    }

    getrefNumberTextbox() {
        return element(by.name('refNumber'));
    }

    getcustNameTextbox() {
        return element(by.name('custName'));
    }

    getcustAddTextbox() {
        return element(by.name('custAdd'));
    }

    getcustomerNoTextbox() {
        return element(by.name('customerNo'));
    }

    getcustPhoneTextbox() {
        return element(by.name('custPhone'));
    }

    gettransferAmtTextbox() {
        return element(by.name('transferAmt'));
    }

    getcurrencyTextbox() {
        return element(by.name('currency'));
    }

    getbaneBankTextbox() {
        return element(by.name('baneBank'));
    }

    getbeneAccNoTextbox() {
        return element(by.name('beneAccNo'));
    }

    getpaymentDetailsTextbox() {
        return element(by.name('paymentDetails'));
    }

    getFormSuccessfullyPostText() {
        return element(by.className('toast-message'));
    }

    getForm(){
        return element(by.className('newTransactionForm'));
    }
}

