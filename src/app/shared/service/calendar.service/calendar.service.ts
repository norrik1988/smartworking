import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Calendar } from '../../model/calendar/calendar';



@Injectable({
    providedIn: 'root'
})
export class CalendarService {
    selected!: Date;
    calendar: Calendar = {} as Calendar;
    arrayCal: Calendar[] = []

    constructor(private http: HttpClient) { }

    add(cal: Calendar) {
        this.http.post<Calendar>(`http://localhost:3000/calendar`, cal).subscribe(res => {
            this.arrayCal.push(res);

        })
    }


    getAll() {
        this.http.get<Calendar[]>('http://localhost:3000/calendar').subscribe(res => this.arrayCal = res)
      }


      getCalendar(calendar: Calendar): Calendar {
        this.http.get<Calendar>(`http://localhost:3000/calendar/${calendar.id}`).subscribe(res => {
          const index = this.arrayCal.findIndex(cl => cl.id === calendar.id);
          this.arrayCal[index] = res
          console.log(this.arrayCal[index]);
        })
        return calendar;
      }






}