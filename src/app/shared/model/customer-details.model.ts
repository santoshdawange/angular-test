export class CustomerDetails {
    public customer_number: string;
    public customer_name: string;
    public address: string;
    public phone: number;

    constructor(
        customer_number: string,
        customer_name: string,
        address: string,
        phone: number,
    ){
        this.customer_number = customer_number;
        this.customer_name = customer_name;
        this.address = address;
        this.phone = phone;
    }
}
