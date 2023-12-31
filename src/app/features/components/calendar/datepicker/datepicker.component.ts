
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
  constructor(public dialog: MatDialog, public calendarService: CalendarService) {}
  

  ngOnInit() { 
    this.calendarService.getAll()
  }

}


