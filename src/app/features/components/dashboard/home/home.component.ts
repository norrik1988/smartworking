import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDashboardDialogComponent } from 'src/app/shared/components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';

export interface Row {
  flag: boolean;
}

export interface Column {
  flag: boolean;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  row: Row[] = [
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: true },
    { flag: true },
  ];

  column: Column[] = [
    { flag: true },
    { flag: false },
    { flag: true, },
    { flag: false },
    { flag: true },
  ];

  blankRow: Row[] = [
    { flag: false },
    { flag: false },
    { flag: false },
    { flag: true },
    { flag: true },
  ];

  blankColumn: Column[] = [
    { flag: true },
    { flag: false },
    { flag: true, },
    { flag: false },
    { flag: true },
  ];



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
