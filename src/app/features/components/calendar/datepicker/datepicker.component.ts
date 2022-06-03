
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import { CalendarService } from 'src/app/shared/service/calendar.service/calendar.service';
import { createEventId, INITIAL_EVENTS } from 'src/app/features/components/calendar/datepicker/event-utils';

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
    initialEvents: INITIAL_EVENTS,
    events: `http://localhost:3000/calendar`,
    weekends: true,
    editable: true,

    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.calendarService.onDateClick.bind(this),
    eventClick: this.calendarService.openDelete.bind(this),
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


