
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import { CalendarService } from 'src/app/shared/service/calendar.service/calendar.service';
import { INITIAL_EVENTS, createEventId } from 'src/app/features/components/calendar/datepicker/event-utils';
import { CalendarDialogComponent } from 'src/app/shared/dialog/calendar-dialog/calendar-dialog.component';

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

  constructor(public dialog: MatDialog, public calendarService: CalendarService) { }


  ngOnInit() {
    this.calendarService.addEvents(this.calendarService.calendar);
  }
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, 
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
   
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
}


