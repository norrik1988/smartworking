import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Calendar } from '../../model/calendar/calendar';



@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    selected!: Date;
    app: string = 'smart';
    calendar: Calendar = {} as Calendar;
    arrayCal: Calendar[] = []

    constructor(private http: HttpClient) { }

    add(cal: Calendar) {
        this.http.post<Calendar>(`http://localhost:3000/calendar`, cal).subscribe(res => {
            this.arrayCal.push(res);

        })
    }







}