import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LogoutDialog } from './dialog/logout-dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public globalservices: GlobalService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  logout(event){
    // if(confirm("Are you sure to logout")) {
    //   this.globalservices.header = false;
    //   sessionStorage.removeItem('loginDetails');
    //   this.router.navigateByUrl('login');
    // }

    const dialogRef = this.dialog.open(LogoutDialog, {
      width: '250px'
    });
  }

}