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
  dateEvent: string = new Date(startStr).toLocaleDateString();
  dateEventEnd: string = endStr;
  idSelected: number = idSelected;
  dateView: string = startStr;

  constructor(public calendarService: CalendarService) { }


  edit(form: NgForm) {
    this.calendarService.edit(form.value)

  }
  annulla() {
    this.calendarService.getAll()
  }
}
