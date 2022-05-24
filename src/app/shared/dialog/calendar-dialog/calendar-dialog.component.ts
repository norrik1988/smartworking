import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatepickerComponent } from 'src/app/features/components/calendar/datepicker/datepicker.component';
import { CalendarService } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-calendar-dialog',
  templateUrl: './calendar-dialog.component.html',
  styleUrls: ['./calendar-dialog.component.scss']
})
export class CalendarDialogComponent implements OnInit {
  constructor(public calendarService: CalendarService) { }
  ngOnInit(): void {
    this.res.dataStr
  }
  datePicker!: DatepickerComponent;
  flag: boolean = false;
  res: any;
  add(f: NgForm) {
    this.calendarService.add(f.value);
    f.reset();
  }
}
