<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { GearComponent } from './features/components/settings/gear/gear.component';
=======
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
>>>>>>> 539277c29b5a99e0ad9b3d766426875b09c5afc6
import { AuthService } from './shared/service/auth.service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD
export class AppComponent implements OnInit{
  constructor(public auth: AuthService){}
=======
export class AppComponent {
  constructor(public auth: AuthService, private http: HttpClient) { }
>>>>>>> 539277c29b5a99e0ad9b3d766426875b09c5afc6
  title = 'smartworking';
  ngOnInit(): void {
    
  }
}
