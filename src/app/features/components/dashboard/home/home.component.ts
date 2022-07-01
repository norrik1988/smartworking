import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first, Observable } from 'rxjs';
import { UserService } from 'src/app/shared/model/user/service/user.service';
import { User, WorkSpace, WorkStation } from 'src/app/shared/model/user/user';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  workspace!: WorkSpace[];

  ngOnInit() {
   this.userService.getWorkspace().subscribe((res) =>{
    this.workspace = res;
   })
   



  }

  n = 5;
  planModel: any = {
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  

  constructor(public dialog: MatDialog, public userService: UserService, private http: HttpClient) {
    userService.dateSelected = this.planModel.start_time;
  }

  public get showName() {
    return localStorage.getItem("SessionUser")
  }

}
