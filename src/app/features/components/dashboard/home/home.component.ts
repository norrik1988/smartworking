import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { WorkSpace, WorkStation } from 'src/app/shared/model/user/user';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() workstation!: WorkStation;
  
  arr = [0,1,2,3,4,5,6,7,8,9];
  n = 2;

  planModel: any = {
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  workspace: WorkSpace = new WorkSpace;
  card!: any;
  counter: number = 1;

  constructor(public dialog: MatDialog, public userService: UserService,) {
    userService.dateSelected = this.planModel.start_time;
  }

  ngOnInit() {
    console.log(this.counter)
    while (this.counter < 25) { 
      for (let col = 0; col < 5; col++) {
        for (let rig = 0; rig < 5; rig++) {
          this.card = this.workspace?.workstations[this.counter];
          console.log(this.counter)
        }
      }
      this.counter++;
    }
  }

  public get showName() {
    return localStorage.getItem("SessionUser")
  }

}
