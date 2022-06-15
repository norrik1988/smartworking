import { Component } from '@angular/core';
import { CalendarService, eventSelected } from '../../service/calendar.service/calendar.service';

@Component({
  selector: 'app-delete-calendar-dialog',
  templateUrl: './delete-calendar-dialog.component.html',
  styleUrls: ['./delete-calendar-dialog.component.scss']
})
export class DeleteCalendarDialogComponent {
  evento: any = eventSelected;
  constructor(public calendarService: CalendarService) { }



}
