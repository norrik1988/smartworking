import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-gear',
  templateUrl: './gear.component.html',
  styleUrls: ['./gear.component.scss']
})
export class GearComponent implements OnInit {

  //vedi dataSource

  constructor() { }

  ngOnInit(): void {
  }
   @Input() flag : boolean=false;
  @Input() flag2 : boolean=false;
  @Input() flag3 : boolean=false;
  @Input() number !: number;
  numero !: number;

  changeColor(cambio : number){
   this.flag=false;
   this.flag2=false;
   this.flag3=false;
    if(cambio==1){
      this.flag=true
      this.number =cambio
    } else if (cambio ==2){
      this.flag2=true;
      this.number =cambio
    } else {
      this.flag3=true
      this.number =cambio
    }
  
   }

  
}
