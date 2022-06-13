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


  constructor(
    public dialog: MatDialog,
    public userService: UserService,
  ) { }

  planModel: any = { start_time: new Date() };

  firstMatrix: WorkStation[][] =
    [
      [
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
      ],
    ]// in più

  /* [
    [
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
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 8, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 9, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 10, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ],
    [
      {
        id: 11, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 12, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 13, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 14, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 15, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ],
    [
      {
        id: 16,
         row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 17, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 18, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 19,
         row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 20, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ],
    [
      {
        id: 21, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 22, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 23, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 24, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 25, 
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
    ]]

secondMatrix: WorkStation[][] =
  [
    [
      {
        id: 26,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 27,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 28,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      }
    ], [
      {
        id: 29,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 30,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 31,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      }
    ],
    [
      {
        id: 32,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 33,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 34,
        row: ,
        column: ,
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      }
    ],
    [
      {
        id: 35,
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 36,
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 37,
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      }
    ],
    [
      {
        id: 38,
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 39,
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 40,
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      }
    ]]

thirdMatrix: WorkStation[][] =
  [
    [
      {
        id: 41, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 42, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
    ],
    [
      {
        id: 43, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 44, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ],
    [
      {
        id: 45, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 46, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ],
    [
      {
        id: 47, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
      {
        id: 48, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
    ],
    [
      {
        id: 49, row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: false
      },
      {
        id: 50,
        row: [],
        column: [],
        user: this.userService.userSelected,
        date_workstation: this.userService.dateSelected,
        flag: true
      },
    ]] */

  public get showName() {
    return localStorage.getItem("SessionUser")
  }
  @Input() workstation!: WorkStation;

  openEdit() {
    const dialogRef = this.dialog.open(EditDashboardDialogComponent);
    this.userService.getUser();
    console.log(this.userService.getData());
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
      }
    );
  }

  save(data: HTMLInputElement) {
    this.userService.dateSelected = data.value;
    return this.userService.dateSelected;
  }

  get() {
    console.log(this.firstMatrix)
  }

  setMatrix(workstation: WorkStation) {
    console.log(workstation)
    this.firstMatrix[workstation.column][workstation.row].user = workstation.user;
    this.firstMatrix[workstation.column][workstation.row].date_workstation = workstation.date_workstation;
  }

}
