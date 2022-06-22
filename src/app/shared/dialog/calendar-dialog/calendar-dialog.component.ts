import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalendarService, endStr, startStr } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.scss']
})
export class CalendarDialogComponent {
  start: string =  new Date(startStr).toISOString().replace(/T.*$/, '');
  end: string = new Date(endStr).toISOString().replace(/T.*$/, '');
  color!: string;

  constructor(public calendarService: CalendarService) { }


  add(f: NgForm) {
    this.calendarService.add(f.value);
    f.reset();

  }
}
