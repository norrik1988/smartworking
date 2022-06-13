import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { EditDashboardDialogComponent } from 'src/app/shared/components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { WorkStation } from 'src/app/shared/model/user/user';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() workstation!: WorkStation;

  planModel: any = {
    /* start_time: new Date().toDateString, */
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  constructor(public dialog: MatDialog, public userService: UserService,) {
    userService.dateSelected = this.planModel.start_time;
  }

  firstMatrix: WorkStation[][] =
    [[
      {
        id: 1,

        row: 0,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 2,

        row: 1,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 3,

        row: 2,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 4,

        row: 3,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 5,

        row: 4,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
    ], [
      {
        id: 6,

        row: 0,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 7,

        row: 1,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 8,

        row: 2,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 9,

        row: 3,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 10,

        row: 4,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ], [
      {
        id: 11,

        row: 0,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 12,

        row: 1,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 13,

        row: 2,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 14,

        row: 3,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 15,

        row: 4,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ], [
      {
        id: 16,

        row: 0,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 17,

        row: 1,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 18,

        row: 2,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 19,

        row: 3,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 20,

        row: 4,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ], [
      {
        id: 21,

        row: 0,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 22,

        row: 1,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 23,

        row: 2,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 24,

        row: 3,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 25,

        row: 4,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
    ]]

  secondMatrix: WorkStation[][] =
    [[
      {
        id: 26,

        row: 0,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 27,

        row: 1,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 28,

        row: 2,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      }
    ], [
      {
        id: 29,

        row: 0,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 30,

        row: 1,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 31,

        row: 2,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      }
    ], [
      {
        id: 32,

        row: 0,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 33,

        row: 1,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 34,

        row: 2,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      }
    ], [
      {
        id: 35,

        row: 0,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 36,

        row: 1,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 37,

        row: 2,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      }
    ], [
      {
        id: 38,

        row: 0,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 39,

        row: 1,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 40,

        row: 2,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      }
    ]]

  thirdMatrix: WorkStation[][] =
    [[
      {
        id: 41,

        row: 0,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 42,

        row: 1,
        column: 0,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
    ], [
      {
        id: 43,

        row: 0,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 44,

        row: 1,
        column: 1,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ], [
      {
        id: 45,

        row: 0,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 46,

        row: 1,
        column: 2,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ], [
      {
        id: 47,

        row: 0,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 48,

        row: 1,
        column: 3,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ], [
      {
        id: 49,

        row: 0,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 50,

        row: 1,
        column: 4,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
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

  setMatrix(workstation: WorkStation) {
    for (let row = 0; row < this.firstMatrix.length; row++) {
      for (let column = 0; column < this.firstMatrix[row].length; column++) {
        this.firstMatrix[row][column].user = workstation.user;
        this.firstMatrix[row][column].date_workstation = workstation.date_workstation;
      }
    }

  }

}
