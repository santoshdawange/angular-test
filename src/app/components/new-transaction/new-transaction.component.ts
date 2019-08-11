import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { GlobalService } from 'src/app/shared/services/global.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  @ViewChild('formRef', {static: false}) formRef: FormGroupDirective;

  newTransactionForm: FormGroup;
  // public sequenceNo: number = 0;
  public customerData: any = {};

  constructor(
    public globalservice: GlobalService,
    public apiservice: ApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.newTransactionForm = new FormGroup({
      'refNumber': new FormControl(''),
      'customer_info': new FormGroup({
        'customerNo': new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/[0-9]/i)
        ]),
        'custName': new FormControl('', [
          Validators.required
        ]),
        'custAdd': new FormControl('', [
          Validators.required
        ]),
        'custPhone': new FormControl('', [
          Validators.required,
          Validators.pattern(/[0-9]/i)
        ]),
      }),
      'transferAmt': new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9]/i)
      ]),
      'currency': new FormControl('', [
        Validators.required
      ]),
      'baneBank': new FormControl('', [
        Validators.required,
        Validators.pattern(/[A-Za-z\s]/i)
      ]),
      'beneAccNo': new FormControl('', [
        Validators.required
      ]),
      'paymentDetails': new FormControl('', [
        Validators.required,
        Validators.pattern(/[A-Za-z\s]/i)
      ]),
    });

    this.generateRefNumber();
  }

  get refNumber() { return this.newTransactionForm.get('refNumber'); }
  get customer_info(): any { return this.newTransactionForm.get('customer_info'); }
  get customerNo() { return this.newTransactionForm.get('customer_info.customerNo'); }
  get custName() { return this.newTransactionForm.get('customer_info.custName'); }
  get custAdd() { return this.newTransactionForm.get('customer_info.custAdd'); }
  get custPhone() { return this.newTransactionForm.get('customer_info.custPhone'); }
  get transferAmt() { return this.newTransactionForm.get('transferAmt'); }
  get currency() { return this.newTransactionForm.get('currency'); }
  get baneBank() { return this.newTransactionForm.get('baneBank'); }
  get beneAccNo() { return this.newTransactionForm.get('beneAccNo'); }
  get paymentDetails() { return this.newTransactionForm.get('paymentDetails'); }

  generateRefNumber(){
    let DateObj = new Date();
    let tempDate = DateObj.getFullYear()+''+('0' + (DateObj.getMonth() + 1)).slice(-2)+''+('0' + DateObj.getDate()).slice(-2);
    let tempRefNo = 'CUS'+tempDate+(this.globalservice.sequenceNo);
    console.log(tempRefNo);
    this.newTransactionForm.patchValue({
      refNumber: tempRefNo
    })
  }

  getCustInfo(event){
    console.log(event);
    if((event.target.value).length == 5 && this.customerNo.valid){
      this.globalservice.loader = true;
      this.apiservice.getCustomerData(event.target.value, (response) => {
        if(response.status == 'success'){
          this.globalservice.loader = false;
          this.customer_info.patchValue({
            custName: response.data['CUST_INFO']['SHORT_NAME'],
            custAdd: response.data['CUST_INFO']['STREET_ADDR'],
            custPhone: response.data.CUST_INFO.CONTACT_INFO_V7.CONTACT_INFO_V7.PHONE_LIST_V7.PHONE_LIST_ITEM_V7.PHONE
          })
        }else{
          this.globalservice.loader = false;
          this.toastr.error(response.message);
        }
      })
    }
  }

  onSubmit(){
    console.log(this.newTransactionForm.value);
    this.globalservice.addTransactionData(this.newTransactionForm.value, (res) => {
      if(res.status == 'success'){
        this.apiservice.submitNewTransaction(this.newTransactionForm.value, (response) => {
          if(response.res.status == 'success'){
            this.globalservice.sequenceNo++;
            // this.newTransactionForm.reset();
            this.formRef.resetForm();
            this.generateRefNumber()
            this.toastr.success(response.message);
          }else{
            this.toastr.error(response.message);
          }
        })
      }
    });
  }
}
