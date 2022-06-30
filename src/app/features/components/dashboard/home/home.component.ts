import { HttpClient } from '@angular/common/http';
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
  
  arr: WorkStation[] = [];
  arrNumber : any []=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  n = 5;
  flag : boolean = false
  planModel: any = {
    start_time: new Date().toISOString().replace(/T.*$/, ''),
  };

  workspace: WorkSpace = new WorkSpace;
  card!: any;
  counter: number = 1;

  constructor(public dialog: MatDialog, public userService: UserService, private http:  HttpClient) {
    userService.dateSelected = this.planModel.start_time;
    this.metodo()
  }

  ngOnInit() {
   
     console.log(this.counter)
     if (this.counter < 25) { 
       for (let col = 0; col < 5; col++) {
         for (let rig = 0; rig < 5; rig++) {
           this.card = this.workspace?.workstations[this.counter];
           this.counter++;
           console.log(this.counter)

         }
       }
      
     }
  }
metodo(){
  this.http.get<WorkStation[]>('http://localhost:3000/workspace').subscribe(res =>{ 
    this.arr= res
  for(let i = 0; i<= this.arr.length; i++){
    console.log(this.arr)

    if(this.arr[i].card_visibility == true){
     this.flag = true
      console.log(this.arr)
    } else {
      this.flag= false
    }
  } 
 

});
}
  public get showName() {
    return localStorage.getItem("SessionUser")
  }

}
