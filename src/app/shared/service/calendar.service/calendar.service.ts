import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DateSelectArg, EventApi, EventChangeArg, EventClickArg } from '@fullcalendar/core';
import { CalendarDialogComponent } from '../../dialog/calendar-dialog/calendar-dialog.component';
import { DeleteCalendarDialogComponent } from '../../dialog/delete-calendar-dialog/delete-calendar-dialog.component';
import { EditCalendarDialogComponent } from '../../dialog/edit-calendar-dialog/edit-calendar-dialog.component';
import { Calendar } from '../../model/calendar/calendar';

export var idSelected: any;
export var eventSelected: any;
export var startStr: string;
export var endStr: string;

@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    calendar: Calendar = {} as Calendar;
    eventSelect: any;
    color !: string;
    currentEvents: EventApi[] = [];
    events: Calendar[] = [];
    event: Calendar[] = [];

    constructor(private http: HttpClient, public dialog: MatDialog) { }

    showOptions(event: any): void {
        if (event.source.value == 'green') {

            console.log('value =  ' + event.source.value);
        } else if (event.source.value == 'primary') {
            console.log('value =  ' + event.source.value)
        } else {
            console.log('value =  ' + event.source.value)
        }
        this.filterEvents(event.source.value)
    }

    filterEvents(value: any): Calendar[] {
        this.http.get<Calendar[]>(`http://localhost:3000/calendar`).subscribe(res => this.events = res);
        const filterValue = value.toLowerCase();
        this.event = this.events.filter(state => state.color.toLowerCase().includes(filterValue));
        console.log(this.event);
        return this.event
    }

    add(cal: Calendar) {
        this.http.post<Calendar>(`http://localhost:3000/calendar`, cal).subscribe(res => {
            this.events.push(res)
            window.location.reload();
        })
    }

    delete(cal: Calendar): Calendar {
        this.http.delete(`http://localhost:3000/calendar/${cal.id}`)
            .subscribe(() => {
                const indice = this.events.findIndex(cl => cl.id === cal.id);
                this.events.splice(indice, 1);
                window.location.reload();
            })
        return cal
    }
    edit(cal: Calendar) {
        this.http.patch<Calendar>(`http://localhost:3000/calendar/${idSelected}`, cal)
            .subscribe(res => {
                const index = this.events.findIndex(cl => cl.id === cal.id);
                this.events[index] = res;
                window.location.reload();
            });
    }

    onDateClick(selectInfo: DateSelectArg) {
        startStr = selectInfo.startStr;
        endStr = selectInfo.endStr;


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
        events = this.currentEvents;
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



