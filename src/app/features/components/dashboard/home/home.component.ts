import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 2,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 3,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 4,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 5,
        card_visibility: true,
        user: this.userService.user
      },
    ], [
      {

        id: 6,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 7,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 8,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 9,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 10,
        card_visibility: false,
        user: this.userService.user
      },
    ], [
      {

        id: 11,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 12,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 13,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 14,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 15,
        card_visibility: false,
        user: this.userService.user
      },
    ], [
      {

        id: 16,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 17,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 18,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 19,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 20,
        card_visibility: false,
        user: this.userService.user
      },
    ], [
      {

        id: 21,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 22,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 23,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 24,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 25,
        card_visibility: true,
        user: this.userService.user
      },
    ]]

  secondMatrix: WorkStation[][] =
    [[
      {

        id: 26,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 27,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 28,
        card_visibility: false,
        user: this.userService.user
      }
    ], [
      {

        id: 29,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 30,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 31,
        card_visibility: false,
        user: this.userService.user
      }
    ], [
      {

        id: 32,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 33,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 34,
        card_visibility: true,
        user: this.userService.user
      }
    ], [
      {

        id: 35,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 36,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 37,
        card_visibility: true,
        user: this.userService.user
      }
    ], [
      {

        id: 38,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 39,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 40,
        card_visibility: true,
        user: this.userService.user
      }
    ]]

  thirdMatrix: WorkStation[][] =
    [[
      {

        id: 41,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 42,
        card_visibility: true,
        user: this.userService.user
      },
    ], [
      {

        id: 43,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 44,
        card_visibility: false,
        user: this.userService.user
      },
    ], [
      {

        id: 45,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 46,
        card_visibility: false,
        user: this.userService.user
      },
    ], [
      {

        id: 47,
        card_visibility: true,
        user: this.userService.user
      },
      {

        id: 48,
        card_visibility: false,
        user: this.userService.user
      },
    ], [
      {

        id: 49,
        card_visibility: false,
        user: this.userService.user
      },
      {

        id: 50,
        card_visibility: true,
        user: this.userService.user
      },
    ]]

  public get showName() {
    return localStorage.getItem("SessionUser")
  }

}
