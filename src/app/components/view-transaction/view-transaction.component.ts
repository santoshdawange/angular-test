import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})

export class ViewTransactionComponent implements OnInit {
  public transactionData: any[] = [];
  constructor(
    public apiservice: ApiService,
    public globalservice: GlobalService
  ) { 
    this.globalservice.loader = true;  
  }

  ngOnInit() {
    this.apiservice.getTransactionData((response) => {
      if(response.status == 'success'){
        this.transactionData = response.data;
        this.globalservice.loader = false;
      }
    })
  }
}
