import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateSelectArg, EventApi, EventChangeArg, EventClickArg } from '@fullcalendar/core';
import { INITIAL_EVENTS } from 'src/app/features/components/calendar/datepicker/event-utils';
import { CalendarDialogComponent } from '../../dialog/calendar-dialog/calendar-dialog.component';
import { DeleteCalendarDialogComponent } from '../../dialog/delete-calendar-dialog/delete-calendar-dialog.component';
import { EditCalendarDialogComponent } from '../../dialog/edit-calendar-dialog/edit-calendar-dialog.component';
import { Calendar } from '../../model/calendar/calendar';



@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    calendar: Calendar = {} as Calendar;
    eventSelected: any;

    constructor(private http: HttpClient, public dialog: MatDialog) { }

    currentEvents: EventApi[] = [];



    add(cal: Calendar) {
        this.http.post<Calendar>(`http://localhost:3000/calendar`, cal).subscribe(res => {
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
    edit(cal: Calendar) {
        this.http.patch<Calendar>(`http://localhost:3000/calendar/${idSelected}`, cal)
            .subscribe(res => {
                const index = INITIAL_EVENTS.findIndex(cl => cl.id === cal.id);
                INITIAL_EVENTS[index] = res;
                window.location.reload();
            });
    }

    onDateClick(selectInfo: DateSelectArg) {
        startStr = selectInfo.startStr;
        endStr = selectInfo.endStr;
        console.log('Data Inizio ' + startStr);
        console.log('Data Fine ' + endStr);

        this.dialog.open(CalendarDialogComponent, {
            width: '250px',
        });
    }
    openDelete(clickInfo: EventClickArg) {
        eventSelected = clickInfo.event;
        const dialogRef = this.dialog.open(DeleteCalendarDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    handleEvents(events: EventApi[]) {
        events = INITIAL_EVENTS;
    }
    dropEvent(arg: EventChangeArg) {
        idSelected = arg.event.id;
        eventSelected = arg.event.title
        startStr = arg.event.startStr

        const dialogRef = this.dialog.open(EditCalendarDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            window.location.reload();
        });
    }
}
export var idSelected: any;
export var eventSelected: any;
export var startStr: any;
export var endStr: any;


