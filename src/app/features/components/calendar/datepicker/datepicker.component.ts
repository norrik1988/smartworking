
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/angular';
import { CalendarDialogComponent } from 'src/app/shared/dialog/calendar-dialog/calendar-dialog.component';
import { CalendarService } from 'src/app/shared/service/calendar.service/calendar.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  // constructor(public dialog: MatDialog, public calendarService: CalendarService) { }
  // selected!: Event | null;
  // app!: Event | null;
  // ngOnInit(): void {
  // }

  // //   openDialog(date:Event): void {
  // //     const target = date.target as HTMLDivElement;

  // //     if(target.classList.contains('mat-calendar-body-cell-content') && target.textContent == '1' && '31'){
  // //     this.selected= date;
  // //     const dialogRef = this.dialog.open(CalendarDialogComponent, {
  // //       width: '250px',
  // //     });
  // //     dialogRef.afterClosed().subscribe(result => {
  // //       console.log('The dialog was closed');
  // //     })
  // //   }
  // // }
  // openDialog(date: Event): void {
  //   const target = date.target as HTMLDivElement;
  //   const day = Number(target.textContent)
  //   if (target.classList.contains('mat-calendar-body-cell-content') && day >= 1 && day <= 31) {
  //     this.selected = date;
  //     this.calendarService.calendar.date = this.calendarService.selected
  //     const dialogRef = this.dialog.open(CalendarDialogComponent, {
  //       width: '250px',
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log('The dialog was closed');
  //     })
  //   }
  // }
  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true
  };
  constructor(private httpClient: HttpClient, public dialog: MatDialog, public calendarService: CalendarService) { }

  onDateClick(res: any) {
    this.calendarService.boh = res.dateStr
    this.dialog.open(CalendarDialogComponent, {
      width: '250px',
    });


  }
  ngOnInit() {
    setTimeout(() => {
      return this.httpClient
        .get('http://localhost:8888/event.php')
        .subscribe((res: any) => {
          this.Events.push(res);
          console.log(this.Events);
        });
    }, 2200);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        dateClick: this.onDateClick.bind(this),
        events: this.Events,
      };
    }, 2500);
  }
}


