import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { BankTransferComponent } from '../components/bank-transfer/bank-transfer.component';
import { ViewTransactionComponent } from '../components/view-transaction/view-transaction.component';
import { NewTransactionComponent } from '../components/new-transaction/new-transaction.component';
import { AuthGuard } from '../guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'banktransfer', component: BankTransferComponent, canActivate: [AuthGuard] },
  { path: 'viewtransaction', component: ViewTransactionComponent, canActivate: [AuthGuard] },
  { path: 'newtransaction', component: NewTransactionComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
