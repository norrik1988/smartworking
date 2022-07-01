import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User, WorkSpace, WorkStation } from 'src/app/shared/model/user/user';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() workstation!: WorkStation;

  arr: WorkSpace[] = [];

  array!: WorkStation[];

  ngOnInit() {
    let workstation: WorkStation
    let i: number
    for (let column = 0; column < 5; column++) {
      for (let row = 0; row < 5; row++) {
        workstation = {
          id: this.counter,
          user: new User,
          card_visibility: true
        }
        i = column * row;
        console.log(i)
        this.counter++;
        this.array[i] = workstation

      }
    }


    this.arr = [
      {
        id: this.counter,
        date_workstation: new Date,
        workstations: this.array

      }
    ]
    console.log(this.arr)

  }

  n = 5;
  flag: boolean = false
  planModel: any = {
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  workspace: WorkSpace = new WorkSpace;
  card!: any;
  counter: number = 1;

  constructor(public dialog: MatDialog, public userService: UserService, private http: HttpClient) {
    userService.dateSelected = this.planModel.start_time;
  }

  public get showName() {
    return localStorage.getItem("SessionUser")
  }

}
