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
    /* start_time: new Date().toDateString, */
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  constructor(public dialog: MatDialog, public userService: UserService,) {
    userService.dateSelected = this.planModel.start_time;
  }

  firstMatrix: WorkStation[][] =
    [[
      {
        id: [0][0],
        position: 1,
        card_visibility: false
      },
      {
        id: [0][1],
        position: 2,
        card_visibility: false
      },
      {
        id: [0][2],
        position: 3,
        card_visibility: true
      },
      {
        id: [0][3],
        position: 4,
        card_visibility: true
      },
      {
        id: [0][4],
        position: 5,
        card_visibility: true
      },
    ], [
      {
        id: [1][0],
        position: 6,
        card_visibility: false
      },
      {
        id: [1][1],
        position: 7,
        card_visibility: false
      },
      {
        id: [1][2],
        position: 8,
        card_visibility: false
      },
      {
        id: [1][3],
        position: 9,
        card_visibility: false
      },
      {
        id: [1][4],
        position: 10,
        card_visibility: false
      },
    ], [
      {
        id: [2][0],
        position: 11,
        card_visibility: false
      },
      {
        id: [2][1],
        position: 12,
        card_visibility: false
      },
      {
        id: [2][2],
        position: 13,
        card_visibility: true
      },
      {
        id: [2][3],
        position: 14,
        card_visibility: true
      },
      {
        id: [2][4],
        position: 15,
        card_visibility: false
      },
    ], [
      {
        id: [3][0],
        position: 16,
        card_visibility: true
      },
      {
        id: [3][1],
        position: 17,
        card_visibility: false
      },
      {
        id: [3][2],
        position: 18,
        card_visibility: false
      },
      {
        id: [3][3],
        position: 19,
        card_visibility: false
      },
      {
        id: [3][4],
        position: 20,
        card_visibility: false
      },
    ], [
      {
        id: [4][0],
        position: 21,
        card_visibility: true
      },
      {
        id: [4][1],
        position: 22,
        card_visibility: false
      },
      {
        id: [4][2],
        position: 23,
        card_visibility: true
      },
      {
        id: [4][3],
        position: 24,
        card_visibility: true
      },
      {
        id: [4][4],
        position: 25,
        card_visibility: true
      },
    ]]

  /*  secondMatrix: WorkStation[][] =
     [[
       {
         id:[][],
         position: 26,
         card_visibility: false
       },
       {
         id:[][],
         position: 27,
         card_visibility: false
       },
       {
         id:[][],
         position: 28,
         card_visibility: false
       }
     ], [
       {
         id:[][],
         position: 29,
         card_visibility: false
       },
       {
         id:[][],
         position: 30,
         card_visibility: false
       },
       {
         id:[][],
         position: 31,
         card_visibility: false
       }
     ], [
       {
         id:[][],
         position: 32,
         card_visibility: true
       },
       {
         id:[][],
         position: 33,
         card_visibility: false
       },
       {
         id:[][],
         position: 34,
         card_visibility: true
       }
     ], [
       {
         id:[][],
         position: 35,
         card_visibility: true
       },
       {
         id:[][],
         position: 36,
         card_visibility: false
       },
       {
         id:[][],
         position: 37,
         card_visibility: true
       }
     ], [
       {
         id:[][],
         position: 38,
         card_visibility: true
       },
       {
         id:[][],
         position: 39,
         card_visibility: false
       },
       {
         id:[][],
         position: 40,
         card_visibility: true
       }
     ]]
 
   thirdMatrix: WorkStation[][] =
     [[
       {
         id:[][],
         position: 41,
         card_visibility: false
       },
       {
         id:[][],
         position: 42,
         card_visibility: true
       },
     ], [
       {
         id:[][],
         position: 43,
         card_visibility: true
       },
       {
         id:[][],
         position: 44,
         card_visibility: false
       },
     ], [
       {
         id:[][],
         position: 45,
         card_visibility: true
       },
       {
         id:[][],
         position: 46,
         card_visibility: false
       },
     ], [
       {
         id:[][],
         position: 47,
         card_visibility: true
       },
       {
         id:[][],
         position: 48,
         card_visibility: false
       },
     ], [
       {
         id:[][],
         position: 49,
         card_visibility: false
       },
       {
         id:[][],
         position: 50,
         card_visibility: true
       },
     ]] */

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

  setMatrix(workspace: WorkSpace) {
    for (let row = 0; row < this.firstMatrix.length; row++) {
      for (let column = 0; column < this.firstMatrix[row].length; column++) {
        this.id_position = this.firstMatrix[row][column].position;
        if (this.firstMatrix[row][column].card_visibility == true && this.firstMatrix[row][column].position == workspace.id_position) {
          this.userService.positionSelected = this.firstMatrix[row][column].position
          console.log('eh: ' + this.userService.positionSelected)
          break;
        }
      }
    }
  }

}
