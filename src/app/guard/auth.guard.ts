import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../shared/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router : Router,
    private globalservice : GlobalService
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    let url: string = state.url;  
    return this.verifyRoute(url);
  }

  verifyRoute(url) : boolean{
    if(!this.isAuthorise()){
      this.globalservice.header = false;
      this.router.navigateByUrl('/login');
      return false;
    }else{
      this.globalservice.header = true;
      if(url == '/login'){
        this.router.navigateByUrl('/banktransfer');
      }
      return true;
    }
  }
  
  public isAuthorise(): boolean{
    let status = false;
    let key = 'loginDetails';
    let sessionData;
    if (sessionStorage.getItem(key) != null) {
      sessionData = JSON.parse(sessionStorage.getItem(key));
    }

    if(sessionData != undefined){  
      if(sessionData.isLoggedIn == true){
        status = true;
      }else{
        status = false;
      }
    }else{
      status = false;
    }
    return status;
  }
}
