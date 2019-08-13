# Angular Bank Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Points to be taken into consideration

1.	I have covered and solve all the points mention in the assignment.
2.	I have used API for login, Credentials are : { "email": "admin@admin.com", "password": "admin" }
It will login only when you entered the above mention email on screen, so that it will return the users list.
3.	I have also used Auth Guard to protect the routes.
4.	Used Directive “FormGroupDirective” to handle FormControl, "appOnlyDigit" Directive to restrict alphabets and special characters in input fields and "appOnlyCharacters" Directive to restrict Numbers and special characters in input fields.
5.	Implemented custom currencyFormatter Pipe in Project to show transfer amount in view transaction component.
6.	Created Generic Model file at the time of store data of new transaction.
7.	For Designing, I have used Angular Material.
8.	Also for Login, View all transactions, Get customer details by customer no ans Submit transaction. I have used online REST API Provider “Sandbox”.
9.	As per the assignment, I have validate “phone no” and “transfer amount” to check if they have numbers only required in new transaction form.
10.	As per the assignment, I have validate “beneficiary bank ” and “payment details” to check if they have alphabets only required in new transaction form.
11.	I have applied maxlength of 5 to customer number filed in new transaction form.
12.	Also For customer number field in New Transaction Form , you can enter customer number as : i) 23423 ii) 23432 iii) 23427
If you entered anyone of the above customer number then only, it will show you its respective fields
13. In new transaction form Reference No, Customer Name, Customer Address and Customer Phone no are readonly fiels as theose fields are auto populated.
14. For customer no field, transfer amount and beneficiary account no input field restrict input to numbers only.
15. For Beneficiary bank and payme nt details input field restrict input to alphabets only.
16. Transfer amount field set a maxlength of 5 digits.
17. Customer number field set a minlength and maxlength to 5 digits.
18. Beneficiary account no field set a maxlength to 12 digits.

•	Source For Online REST API's :

1.	Login GET API : URL : https://ngdemoapi.getsandbox.com/login
Request Params : { "email": "admin@admin.com", "password": "admin" }
Response : { "ID": "1", "token": "23546", "email": "admin@admin.com", "password": "admin", "display_name": "Admin"}

2.	New Transaction POST API : URL : https://ngdemoapi.getsandbox.com/saveTransaction  
Request Params : {"refNumber":"CUS201908111","customer_info":{"customerNo":"23423","custName":"SHORT.NAME23423","custAdd":"STREET-ADDR","custPhone":"22222222"},"transferAmt":"24234","currency":"MUR","baneBank":"ICICI","beneAccNo":"3535534","paymentDetails":"UPI"}
Response : { "status": "success" }

3.	View-All Transaction GET API : URL : https://ngdemoapi.getsandbox.com/getSubmitedTransactions 
Response : [ {
    "reference": "CUS201908023466",
    "customer_number": "23423",
    "customer_name": "ABC XYZ",
    "tansaction_details": {
      "transfer_id": "XYZ",
      "transfer_amount": "43454",
      "transfer_currency": "USD",
      "beneficiary_bank": "State bank of india",
      "beneficiary_account_number": "34567856754356",
      "payment_details": "netbanking"
    }
  }]

4.	Get customer details by customer number GET API : URL : https://ngdemoapi.getsandbox.com/customerById/{CUST_NO}   
Response : {
  "CUST_INFO": {
    "CUST_NO": "23423",
    "SHORT_NAME": "SHORT.NAME23423",
    "IS_INDIVIDUAL": "Y",
    "NATIONALITY": "MU",
    "NATIONALITY_NUM": "480",
    "NATIONALITY_DESC": "INDIAN",
    "STREET_ADDR": "STREET-ADDR",
    "ADDRESS_LINE2": [],
    "ADDRESS_LINE3": [],
    "TOWN_COUNTRY": "CUREPIPE",
    "POST_CODE": [],
    "COUNTRY": "COUNTRY",
    "COUNTRY_CODE": "MU",
    "COUNTRY_CODE_NUM": "480",
    "DESPATCH_CODE": "MA",
    "CONTACT_INFO_V7": {
      "CONTACT_INFO_V7": {
        "COMM_CHANNEL": "BY EMAIL",
        "PHONE_LIST_V7": {
          "PHONE_LIST_ITEM_V7": {
            "PHONE": "22222222"
          }
        },
        "OFFICE_PHONE_LIST_V7": {
          "OFFICE_PHONE_LIST_ITEM_V7": {
            "OFFICE_PHONE": []
          }
        },
        "FAX_LIST_V7": {
          "FAX_LIST_ITEM_V7": {
            "FAX": []
          }
        },
        "SMS_LIST_V7": {
          "SMS_LIST_V7": {
            "MOB_OPER_ISO": "48",
            "MOB_OPER_CODE": "ORANGEMU",
            "SMS_FORMATTED": "+230123456789",
            "SMS_LIST_ITEM_V7": {
              "SMS_LIST_ITEM_V7": {
                "SMS": "+230123456789"
              }
            }
          }
        },
        "EMAIL_LIST_V7": {
          "EMAIL_LIST_ITEM_V7": {
            "EMAIL": "THIS_IS_A_TEST@GMAIL.COM"
          }
        }
      }
    }
  }
}
