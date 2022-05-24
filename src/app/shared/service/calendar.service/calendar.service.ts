import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import { CalendarDialogComponent } from '../../dialog/calendar-dialog/calendar-dialog.component';
import { Calendar } from '../../model/calendar/calendar';



@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    app: string = 'smart';
    calendar: Calendar = {} as Calendar;
    arrayCal: Calendar[] = []
    dateSelected!: Date;
    events: Calendar[] = [];
    constructor(private http: HttpClient, public dialog: MatDialog) { }

    add(cal: Calendar) {
        this.http.post<Calendar>(`http://localhost:3000/calendar`, cal).subscribe(res => {
            this.events.push(res);
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
    onDateClick(res: any) {
        this.dateSelected = res.dateStr;
        this.dialog.open(CalendarDialogComponent, {
            width: '250px',
        });
    }
    addEvents(cal: Calendar) {
        setTimeout(() => {
            return this.http
                .get(`http://localhost:3000/calendar`)
                .subscribe((res: any) => {
                    this.add(cal)
                    console.log(this.events);
                });
        }, 2200);
        setTimeout(() => {
            this.calendarOptions = {
                initialView: 'dayGridMonth',
                dateClick: this.onDateClick.bind(this),
                events: this.events,
            };
        }, 2500);
    }







}