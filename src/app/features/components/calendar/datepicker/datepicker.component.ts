
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventApi } from '@fullcalendar/core';
import { CalendarService } from 'src/app/shared/service/calendar.service/calendar.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  currentEvents: EventApi[] = [];
  green: string = ' green';
  blue: string = 'blue';
  orange: string = ' orange'
  constructor(public dialog: MatDialog, public calendarService: CalendarService) {
    this.calendarService.getAll()

  }
  

  ngOnInit() { }

}


