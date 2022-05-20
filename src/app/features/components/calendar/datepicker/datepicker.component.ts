import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarDialogComponent } from 'src/app/shared/dialog/calendar-dialog/calendar-dialog.component';
import { CalendarService } from 'src/app/shared/service/calendar.service/calendar.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor( public dialog: MatDialog, public calendarService:CalendarService) { }
  selected!: Event| null;

  ngOnInit(): void {
  }

//   openDialog(date:Event): void {
//     const target = date.target as HTMLDivElement;

//     if(target.classList.contains('mat-calendar-body-cell-content') && target.textContent == '1' && '31'){
//     this.selected= date;
//     const dialogRef = this.dialog.open(CalendarDialogComponent, {
//       width: '250px',
//     });
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     })
//   }
// }
openDialog(date:Event): void {
  const target = date.target as HTMLDivElement;
  const day = Number(target.textContent)
if (target.classList.contains('mat-calendar-body-cell-content')  && day >= 1 && day <= 31 ){
  this.selected= date;
     const dialogRef = this.dialog.open(CalendarDialogComponent, {
       width: '250px',
     });
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
     })
   }
  }

}


