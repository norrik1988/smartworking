import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalendarService, eventSelected, idSelected, startStr } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-edit-calendar-dialog',
  templateUrl: './edit-calendar-dialog.component.html',
  styleUrls: ['./edit-calendar-dialog.component.scss']
})
export class EditCalendarDialogComponent implements OnInit {

  constructor(public calendarService: CalendarService) { }
  event: any;
  dateEvent: any;
  idSelected: any;
  ngOnInit(): void {
    this.event = eventSelected;
    this.dateEvent = startStr;
    this.idSelected = idSelected
  }

  edit(form: NgForm) {
    this.calendarService.edit(form.value)

  }

}
