import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { globalVariable } from './shared/model/global/global-variable';
import { AuthService } from './shared/service/auth.service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService) { }


  title = 'smartworking';
  users = [];

  showSpinner = globalVariable.show;

}
