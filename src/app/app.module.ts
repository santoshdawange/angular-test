import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import 'core-js/es7/reflect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BankTransferComponent } from './components/bank-transfer/bank-transfer.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';
import { RoutingModule } from './routing/routing.module';

// form elements 
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { LogoutDialog } from './shared/component/header/dialog/logout-dialog';
import { OnlyDigitsDirective } from './shared/directives/only-digits.directive';
//import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BankTransferComponent,
    ViewTransactionComponent,
    NewTransactionComponent,
    HeaderComponent,
    LogoutDialog,
    OnlyDigitsDirective
  ],
  entryComponents: [
    LogoutDialog
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-left',
      preventDuplicates: false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
