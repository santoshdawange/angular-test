import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(param, callback){
    this.httpClient.get('https://ngdemoapi1.getsandbox.com/login')
		.subscribe(
			res => {
        _.forEach(res ,(element) => {
          if(element['email'] == param['email'] && element['password'] == param['password']){
            element['isLoggedIn'] = true;
            sessionStorage.setItem('loginDetails', JSON.stringify(element));
            callback({'status': 'success', 'data': element, 'message': 'login successfull'});
          }
        });
        callback({'status': 'error', 'message': 'email password not matched.'});
			},
			(err: HttpErrorResponse) => {
        callback({'status': 'error', 'message': 'Something went wrong. Please try again.'});
			}
    );
  }

  getTransactionData(callback){
    this.httpClient.get('https://ngdemoapi1.getsandbox.com/getSubmitedTransactions')
		.subscribe(
			res => {
        callback({'status': 'success', 'data': res});
			},
			(err: HttpErrorResponse) => {
        callback({'status': 'error', 'message': 'Something went wrong.'});
			}
    );
  }

  getCustomerData(id, callback){
    this.httpClient.get('https://ngdemoapi1.getsandbox.com/customerById/'+id)
		.subscribe(
			res => {
        if(res['status'] == 'error' && res['status'] != undefined){
          callback({'status': 'error', 'data': '', 'message': 'Customer data is not found.'});
        }else{
          callback({'status': 'success', 'data': res});
        }
        // callback({'status': 'success', 'data': res});
			},
			(err: HttpErrorResponse) => {
        callback({'status': 'error', 'message': 'Something went wrong.'});
			}
    );
  }

  submitNewTransaction(param, callback){
    this.httpClient.post('https://ngdemoapi1.getsandbox.com/saveTransaction', param)
		.subscribe(
			res => {
        callback({res, 'message': 'Transaction submitted successfully.'});
			},
			(err: HttpErrorResponse) => {
        callback({'status': 'error', 'message': 'Something went wrong.'});
			}
    );
  }
}
