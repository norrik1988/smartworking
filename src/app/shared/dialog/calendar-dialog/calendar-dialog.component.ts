import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalendarService, endStr, startStr } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.scss']
})
export class CalendarDialogComponent implements OnInit {
  start: any
  end: any;

  constructor(public calendarService: CalendarService) { }
  ngOnInit(): void {
    this.start = startStr;
    this.end = endStr;

  }

  flag: boolean = false;

  add(f: NgForm) {

    this.calendarService.add(f.value);
    f.reset();
  }
}
