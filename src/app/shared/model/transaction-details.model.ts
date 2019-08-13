import { CustomerDetails } from '../model/customer-details.model';

export class TransactionDetails {
    public reference: string;
    public transfer_amount: number;
    public transfer_currency: string;
    public beneficiary_bank: string;
    public beneficiary_accno: string;
    public payment_details: string;
    public customer_info: CustomerDetails;

    constructor(){ }
}
