import { Component, OnInit } from '@angular/core';
// import 'core-js/es7/reflect';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { GlobalService } from 'src/app/shared/services/global.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public genError: string;
  
  constructor(
    private router: Router,
    public apiservice: ApiService,
    public authguard: AuthGuard,
    public globalservice: GlobalService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // this.authguard.verifyRoute('/login');

    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onLoginSubmit() {
    // this.genError = '';
    console.log(this.loginForm.value)
    this.apiservice.login(this.loginForm.value, (response) => {
      if(response.status == 'success'){
        this.toastr.success('Login Successful');
        this.router.navigateByUrl('banktransfer')
      }else{
        this.toastr.error(response.message);
        // this.genError = response.message;
      }
    })
  }

}
