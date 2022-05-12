import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GearComponent } from 'src/app/features/components/settings/gear/gear.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit,OnChanges {
 
  settings : GearComponent = new GearComponent;
  constructor(private router: Router){}
  ngOnChanges(changes: SimpleChanges): void {
    this.settings.changeColor(this.settings.number)
  }
  ngOnInit(): void {
    this.settings.flag=true
  }
 
  logOut(): void {
    localStorage.removeItem("SessionUser");
    this.router.navigateByUrl('login/sign-in');
  }

    
}

//provare il setting usando l'onChanges