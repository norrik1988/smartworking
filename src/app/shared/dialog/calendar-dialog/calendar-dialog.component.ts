import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalendarService } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.scss']
})
export class CalendarDialogComponent implements OnInit {
  constructor(public calendarService: CalendarService) { }
  ngOnInit(): void {
    console.log('calendar dialog ' + this.calendarService.startStr)
  }

  flag: boolean = false;

  add(f: NgForm) {
    this.calendarService.add(f.value);
    f.reset();
  }
}
