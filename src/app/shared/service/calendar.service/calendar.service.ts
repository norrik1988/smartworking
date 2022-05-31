import { HttpClient } from '@angular/common/http';
import { Injectable, Input, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import { INITIAL_EVENTS } from 'src/app/features/components/calendar/datepicker/event-utils';
import { CalendarDialogComponent } from '../../dialog/calendar-dialog/calendar-dialog.component';
import { Calendar } from '../../model/calendar/calendar';



@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    work: string = '';
    calendar: Calendar = {} as Calendar;
    arrayCal: Calendar[] = []
    dateSelected: any;
    
    events: any[] = [];

    
    constructor(private http: HttpClient, public dialog: MatDialog) { }

    add(cal: Calendar) {
        this.http.post<Calendar>(`http://localhost:3000/calendar`, cal).subscribe(res => {
            this.events.push(res);
            INITIAL_EVENTS.push(res)
            window.location.reload();
        })
    }

    calendarOptions: CalendarOptions = {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,

    };

    
    onDateClick(selectInfo: DateSelectArg) {
        startStr = selectInfo.startStr;
        endStr = selectInfo.endStr;
        console.log('Data Inizio ' + startStr);
        console.log('Data Fine ' + endStr);

        this.dialog.open(CalendarDialogComponent, {
            width: '250px',
            data: { start: startStr, end: endStr }
        });

    }


}

export var startStr:any;
export var  endStr:any;


