import { Component } from '@angular/core';
import { GlobalService } from './shared/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public showHeaderFooter: boolean = true;
  constructor(
    public globalservice:GlobalService
  ){}
}
