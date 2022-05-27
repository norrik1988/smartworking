import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDashboardDialogComponent } from 'src/app/shared/components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';

export interface FirstRow {
  flag: boolean;
}
export interface BlankRow {
  flag: boolean;
}
export interface SecondRow {
  flag: boolean;
}
export interface ThirdRow {
  flag: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards: FirstRow[] = [{
    flag: false
  },
  {
    flag: false
  },
  {
    flag: false
  },
  {
    flag: true
  }, {
    flag: true
  },
  ];

  blank: BlankRow[] = [
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: false },
  ]

  cardsTwo: SecondRow[] = [{
    flag: true
  },
  {
    flag: false
  },
  {
    flag: true,
  },
  {
    flag: false
  }, {
    flag: true
  },];
  cardsThree: ThirdRow[] = [{
    flag: true
  },
  {
    flag: false
  },
  {
    flag: false,
  },
  {
    flag: false
  }, {
    flag: true
  },];
  constructor(public dialog: MatDialog, public userService: UserService) { }

  public get showName() {
    return localStorage.getItem("SessionUser")
  }

  openEdit() {
    /* this.dashboard.userSelected = user; */
    const dialogRef = this.dialog.open(EditDashboardDialogComponent, {
      width: '250px',
    });
    this.userService.getUser();
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
