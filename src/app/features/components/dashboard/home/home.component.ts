import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDashboardDialogComponent } from 'src/app/shared/components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { WorkSpace, WorkStation } from 'src/app/shared/model/user/user';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() workstation!: WorkStation;
  id_position!: number;

  planModel: any = {
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  constructor(public dialog: MatDialog, public userService: UserService,) {
    userService.dateSelected = this.planModel.start_time;
  }

  firstMatrix: WorkStation[][] =
    [[
      {

        id: 1,
        card_visibility: false
      },
      {

        id: 2,
        card_visibility: false
      },
      {

        id: 3,
        card_visibility: true
      },
      {

        id: 4,
        card_visibility: true
      },
      {

        id: 5,
        card_visibility: true
      },
    ], [
      {

        id: 6,
        card_visibility: false
      },
      {

        id: 7,
        card_visibility: false
      },
      {

        id: 8,
        card_visibility: false
      },
      {

        id: 9,
        card_visibility: false
      },
      {

        id: 10,
        card_visibility: false
      },
    ], [
      {

        id: 11,
        card_visibility: false
      },
      {

        id: 12,
        card_visibility: false
      },
      {

        id: 13,
        card_visibility: true
      },
      {

        id: 14,
        card_visibility: true
      },
      {

        id: 15,
        card_visibility: false
      },
    ], [
      {

        id: 16,
        card_visibility: true
      },
      {

        id: 17,
        card_visibility: false
      },
      {

        id: 18,
        card_visibility: false
      },
      {

        id: 19,
        card_visibility: false
      },
      {

        id: 20,
        card_visibility: false
      },
    ], [
      {

        id: 21,
        card_visibility: true
      },
      {

        id: 22,
        card_visibility: false
      },
      {

        id: 23,
        card_visibility: true
      },
      {

        id: 24,
        card_visibility: true
      },
      {

        id: 25,
        card_visibility: true
      },
    ]]

  secondMatrix: WorkStation[][] =
    [[
      {

        id: 26,
        card_visibility: false
      },
      {

        id: 27,
        card_visibility: false
      },
      {

        id: 28,
        card_visibility: false
      }
    ], [
      {

        id: 29,
        card_visibility: false
      },
      {

        id: 30,
        card_visibility: false
      },
      {

        id: 31,
        card_visibility: false
      }
    ], [
      {

        id: 32,
        card_visibility: true
      },
      {

        id: 33,
        card_visibility: false
      },
      {

        id: 34,
        card_visibility: true
      }
    ], [
      {

        id: 35,
        card_visibility: true
      },
      {

        id: 36,
        card_visibility: false
      },
      {

        id: 37,
        card_visibility: true
      }
    ], [
      {

        id: 38,
        card_visibility: true
      },
      {

        id: 39,
        card_visibility: false
      },
      {

        id: 40,
        card_visibility: true
      }
    ]]

  thirdMatrix: WorkStation[][] =
    [[
      {

        id: 41,
        card_visibility: false
      },
      {

        id: 42,
        card_visibility: true
      },
    ], [
      {

        id: 43,
        card_visibility: true
      },
      {

        id: 44,
        card_visibility: false
      },
    ], [
      {

        id: 45,
        card_visibility: true
      },
      {

        id: 46,
        card_visibility: false
      },
    ], [
      {

        id: 47,
        card_visibility: true
      },
      {

        id: 48,
        card_visibility: false
      },
    ], [
      {

        id: 49,
        card_visibility: false
      },
      {

        id: 50,
        card_visibility: true
      },
    ]]

  public get showName() {
    return localStorage.getItem("SessionUser")
  }

  openEdit() {
    const dialogRef = this.dialog.open(EditDashboardDialogComponent);
    this.userService.getUser();
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
      }
    );
  }



}
