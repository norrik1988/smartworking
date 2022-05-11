import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, private http: HttpClient) { }
  title = 'smartworking';
}
