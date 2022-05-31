import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalendarService, startStr } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.scss']
})
export class CalendarDialogComponent implements OnInit {
  start : any
  constructor(public calendarService: CalendarService) { }
  ngOnInit(): void {
    console.log('calendar dialog ' + startStr)
this.start = startStr  
console.log('calendar dialog start' + this.start)
  }

  flag: boolean = false;

  add(f: NgForm) {
    this.calendarService.add(f.value);
    f.reset();
  }
}
