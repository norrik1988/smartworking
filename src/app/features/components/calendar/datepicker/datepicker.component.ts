
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, EventApi } from '@fullcalendar/core';
import { CalendarService } from 'src/app/shared/service/calendar.service/calendar.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor(public dialog: MatDialog, public calendarService: CalendarService) { }

  ngOnInit() { }
  calendarVisible = true;

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    events: `http://localhost:3000/calendar`,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,

    select: this.calendarService.onDateClick.bind(this),
    eventClick: this.calendarService.openDelete.bind(this),
    eventsSet: this.calendarService.handleEvents.bind(this),
    eventChange: this.calendarService.dropEvent.bind(this),

  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }


  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
}


