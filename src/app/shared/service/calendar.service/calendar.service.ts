import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, DateSelectArg, EventApi, EventChangeArg, EventClickArg, EventInput, EventSourceFunc } from '@fullcalendar/core';
import { CalendarDialogComponent } from '../../dialog/calendar-dialog/calendar-dialog.component';
import { DeleteCalendarDialogComponent } from '../../dialog/delete-calendar-dialog/delete-calendar-dialog.component';
import { EditCalendarDialogComponent } from '../../dialog/edit-calendar-dialog/edit-calendar-dialog.component';
import { Calendar } from '../../model/calendar/calendar';

export var idSelected: any;
export var eventSelected: any;
export var startStr: any;
export var endStr: any;
@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    calendar: Calendar = {} as Calendar;
    eventSelect: any;
    yellow: string = '';
    blue: string = '';
    green: string = '';
    currentEvents: EventApi[] = [];
    events: any[] = [];
    event: Calendar[] = [];
    eventi: EventSourceFunc[] = [];
    checked: boolean = true;
    flag: boolean = true;
    constructor(private http: HttpClient, public dialog: MatDialog) {
    }
    calendarVisible = true;

    calendarOptions: CalendarOptions = {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        },
        initialView: 'dayGridMonth',
        //   events: this.eventi,
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.onDateClick.bind(this),
        eventClick: this.openDelete.bind(this),
        eventsSet: this.handleEvents.bind(this),
        eventChange: this.dropEvent.bind(this),
        eventSourceSuccess: (events) => events.filter(event => event.color === this.yellow || event.color == this.green || event.color == this.blue),

    };
    getAll(): any {
        this.http.get<EventSourceFunc[]>(`http://localhost:3000/calendar`).subscribe(res => {
            this.eventi = res
            this.calendarOptions.events = this.eventi
            console.log(this.eventi)
        });

    }

    showOptions(event: any): void {
        console.log(event.source.checked);
        if(event.source.checked == true){
            if(event.source.value == 'orangered' ){
                this.yellow = event.source.value;
            }
            else if(event.source.value == 'green' ){
                this.green = event.source.value;
            }
            else if(event.source.value == 'primary' ){
                this.blue = event.source.value;
            }
            
            }
            else{
                if(event.source.value == 'orangered' ){
                    this.yellow = '';
                }
                else if(event.source.value == 'green' ){
                    this.green = '';
                }
                else if(event.source.value == 'primary' ){
                    this.blue ='';
                }

            }
            this.getAll();
    }

    /*  filterEvents(value: any): Calendar[] {
          this.http.get<Calendar[]>(`http://localhost:3000/calendar`).subscribe(res => {
              this.events = res
              const filterValue = value.toLowerCase();
              this.eventi = this.events.filter(state => state.color.includes(filterValue));
              console.log(this.eventi);
          })
          this.getAll()
          return this.event
      }*/

    add(cal: Calendar) {
        this.http.post<Calendar>(`http://localhost:3000/calendar`, cal).subscribe(res => {
            this.events.push(res)
            this.getAll()

        })
    }

    delete(cal: Calendar): Calendar {
        this.http.delete(`http://localhost:3000/calendar/${cal.id}`)
            .subscribe(() => {
                const indice = this.events.findIndex(cl => cl.id === cal.id);
                this.events.splice(indice, 1);
                this.getAll()
            })
        return cal
    }
    edit(cal: Calendar) {
        this.http.patch<Calendar>(`http://localhost:3000/calendar/${idSelected}`, cal)
            .subscribe(res => {
                const index = this.events.findIndex(cl => cl.id === cal.id);
                this.events[index] = res;
                this.getAll()
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
    handleCalendarToggle() {
        this.calendarVisible = !this.calendarVisible;
    }

    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }



}