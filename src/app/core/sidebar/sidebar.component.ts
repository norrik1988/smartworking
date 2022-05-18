import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { globalVariable } from 'src/app/shared/model/global/global-variable';
import { SpinnerService } from 'src/app/shared/service/spinner.service/spinner.service';
import { ThemeService } from 'src/app/shared/service/theme.service/theme.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor(private router: Router, public theme: ThemeService, public spinner: SpinnerService) { }

  ngOnInit(): void {
    this.theme.themeClass = 'blue';
  }

  logOut(): void {
    localStorage.removeItem("SessionUser");
    this.router.navigateByUrl('login/sign-in');
  }
}
