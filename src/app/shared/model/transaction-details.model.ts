import { CustomerDetails } from '../model/customer-details.model';

export class TransactionDetails {
    public reference: string;
    public transfer_amount: number;
    public transfer_currency: string;
    public beneficiary_bank: string;
    public beneficiary_accno: string;
    public payment_details: string;
    public customer_info: CustomerDetails;

    constructor(
        reference: string,
        transfer_amount: number,
        transfer_currency: string,
        beneficiary_bank: string,
        beneficiary_accno: string,
        payment_details: string,
        customer_info: any
    ){
        this.reference = reference;
        this.transfer_amount = transfer_amount;
        this.transfer_currency = transfer_currency;
        this.beneficiary_bank = beneficiary_bank;
        this.beneficiary_accno = beneficiary_accno;
        this.payment_details = payment_details;
        this.customer_info = customer_info;
    }
}
