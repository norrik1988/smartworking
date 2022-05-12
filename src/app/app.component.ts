import { Component, OnInit } from '@angular/core';
import { GearComponent } from './features/components/settings/gear/gear.component';
import { AuthService } from './shared/service/auth.service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public auth: AuthService){}
  title = 'smartworking';
  ngOnInit(): void {
    
  }
}
