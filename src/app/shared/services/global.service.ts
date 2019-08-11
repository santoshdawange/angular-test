import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/customer-details.model';
import { TransactionDetails } from '../model/transaction-details.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public header: boolean;
  public loader: boolean = false;
  public sequenceNo: number = 1;

  public transactionData: TransactionDetails[] = [];
  transDataChanged = new Subject<TransactionDetails[]>();

  constructor() { }

  getTransactionData() {
    return this.transactionData.slice();
  }

  addTransactionData(transData: TransactionDetails, callback) {
    this.transactionData.push(transData);
    this.transDataChanged.next(this.transactionData.slice());
    callback({'status': 'success'});
  }
}
