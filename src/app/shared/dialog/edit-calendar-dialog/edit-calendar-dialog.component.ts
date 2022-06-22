import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CalendarService, endStr, eventSelected, idSelected, startStr } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-edit-calendar-dialog',
  templateUrl: './edit-calendar-dialog.component.html',
  styleUrls: ['./edit-calendar-dialog.component.scss']
})
export class EditCalendarDialogComponent {
  event: any = eventSelected;
  dateEvent: string = startStr;
  dateEventEnd : string = endStr
  idSelected: number = idSelected;

  constructor(public calendarService: CalendarService) { }


  edit(form: NgForm) {
    this.calendarService.edit(form.value)

  }

}
