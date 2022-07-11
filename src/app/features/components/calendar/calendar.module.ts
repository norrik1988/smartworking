import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CalendarComponent } from "./calendar.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from "@fullcalendar/angular";
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

FullCalendarModule.registerPlugins([interactionPlugin,dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    ]);
const components = [
    CalendarComponent,
    DatepickerComponent,
    
]

@NgModule({
    declarations: [...components],
    exports: [...components],
    imports: [
        CommonModule,
        SharedModule,
        FullCalendarModule,
        RouterModule.forChild([
            {
                path: '', component: CalendarComponent,
                children: [
                    { path: 'datepicker', component: DatepickerComponent }
                ]
            }
        ]),
        MaterialModule,
        FormsModule
    ],
})

export class CalendarModule { }