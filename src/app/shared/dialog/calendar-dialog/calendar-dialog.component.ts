import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CalendarService, endStr, startStr } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.scss']
})
export class CalendarDialogComponent implements OnInit {
  start: any
  end: any;
  color!: string;

  constructor(public calendarService: CalendarService) {

  }
  ngOnInit(): void {
    this.start = startStr;
    this.end = endStr;

  }


  add(f: NgForm) {
    if (this.color == "orangered") {

      console.log(this.color)
    } else if (this.color == "green") {
      console.log(this.color)
    }
    else if (this.color == "primary") {
      console.log(this.color)
    }
    //  this.calendarService.add(f.value);
    //  f.reset();

  }
}
