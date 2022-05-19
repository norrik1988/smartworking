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

  ngOnInit(): void {
  }

  openDialog(date:Date): void {
    this.calendarService.selected = date;
    const dialogRef = this.dialog.open(CalendarDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

}
