import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from '../../../services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'logout-dialog',
    templateUrl: 'logout-dialog.html',
})
export class LogoutDialog {

    constructor(
        public dialogRef: MatDialogRef<LogoutDialog>,
        public router: Router,
        public globalservices: GlobalService,
        public toast: ToastrService 
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void{
        this.dialogRef.close();
        this.toast.success('Logout Successfully!');
        this.globalservices.header = false;
        sessionStorage.removeItem('loginDetails');
        this.router.navigateByUrl('login');
    }

}