import { HttpClient } from '@angular/common/http';
import { Injectable, Input, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, DateSelectArg, EventClickArg } from '@fullcalendar/core';
import { INITIAL_EVENTS } from 'src/app/features/components/calendar/datepicker/event-utils';
import { CalendarDialogComponent } from '../../dialog/calendar-dialog/calendar-dialog.component';
import { DeleteCalendarDialogComponent } from '../../dialog/delete-calendar-dialog/delete-calendar-dialog.component';
import { Calendar } from '../../model/calendar/calendar';



@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    work: string = '';
    calendar: Calendar = {} as Calendar;
    arrayCal: Calendar[] = []
    eventSelected: any;

    events: any[] = [];


    constructor(private http: HttpClient, public dialog: MatDialog) { }

    add(cal: Calendar) {
        this.http.post<Calendar>(`http://localhost:3000/calendar`, cal).subscribe(res => {
            this.events.push(res);
            INITIAL_EVENTS.push(res)
            window.location.reload();
        })
    }

    delete(cal: Calendar): Calendar {
        this.http.delete(`http://localhost:3000/calendar/${cal.id}`)
            .subscribe(() => {
                const indice = INITIAL_EVENTS.findIndex(cl => cl.id === cal.id);
                INITIAL_EVENTS.splice(indice, 1);
                window.location.reload();
            })
        return cal
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
    openDelete(clickInfo: EventClickArg) {
        eventSelected = clickInfo.event;
        const dialogRef = this.dialog.open(DeleteCalendarDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
export var eventSelected: any;
export var startStr: any;
export var endStr: any;


