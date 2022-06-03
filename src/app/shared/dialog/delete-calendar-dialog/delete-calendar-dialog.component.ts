import { Component, OnInit } from '@angular/core';
import { CalendarService, eventSelected } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-delete-calendar-dialog',
  templateUrl: './delete-calendar-dialog.component.html',
  styleUrls: ['./delete-calendar-dialog.component.scss']
})
export class DeleteCalendarDialogComponent implements OnInit {

  constructor(public calendarService: CalendarService) { }
  evento: any;
  ngOnInit(): void {
    console.log(eventSelected)
    this.evento = eventSelected
  }

  delete() {
    this.calendarService.delete(eventSelected)
  }
}
