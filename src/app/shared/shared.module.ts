import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";


import { AddProjectDialogComponent } from './components/dialog/project/add-project-dialog/add-project-dialog.component';
import { EditProjectDialogComponent } from './components/dialog/project/edit-project-dialog/edit-project-dialog.component';
import { DeleteProjectDialogComponent } from './components/dialog/project/delete-project-dialog/delete-project-dialog.component';

import { AddUsersDialogComponent } from './components/dialog/users/add-users-dialog/add-users-dialog.component';
import { EditUsersDialogComponent } from './components/dialog/users/edit-users-dialog/edit-users-dialog.component';
import { DeleteUsersDialogComponent } from './components/dialog/users/delete-users-dialog/delete-users-dialog.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CardComponent } from './components/card/card.component';
import { BlankComponent } from './components/card/blank/blank.component';
import { EditDashboardDialogComponent } from "./components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component";
import { ToFirstWorkstationPipe } from "./pipe/toFirstWorkstation.pipe";
import { ToSecondWorkstationPipe } from "./pipe/toSecondWorkstation.pipe";
import { ToThirdWorkstationPipe } from "./pipe/toThirdWorkstation.pipe";
import { AddRegistersDialogComponent } from "./components/dialog/registers/add-registers-dialog/add-registers-dialog/add-registers-dialog.component";
import { DeleteRegistersDialogComponent } from "./components/dialog/registers/delete-registers-dialog/delete-registers-dialog/delete-registres-dialog.component";
import { DetailRegistersDialogComponent } from './components/dialog/registers/detail-registers-dialog/detail-registers-dialog/detail-registers-dialog.component';
import { CalendarDialogComponent } from './dialog/calendar-dialog/calendar-dialog.component';
import { DeleteCalendarDialogComponent } from './dialog/delete-calendar-dialog/delete-calendar-dialog.component';
import { EditCalendarDialogComponent } from './dialog/edit-calendar-dialog/edit-calendar-dialog.component';


const components = [
    AddProjectDialogComponent,
    EditProjectDialogComponent,
    DeleteProjectDialogComponent,

    AddUsersDialogComponent,
    EditUsersDialogComponent,
    DeleteUsersDialogComponent,

    EditDashboardDialogComponent,

    CardComponent,
    BlankComponent,

    ToSecondWorkstationPipe,
    ToFirstWorkstationPipe,
    ToThirdWorkstationPipe,

    AddRegistersDialogComponent,
    DetailRegistersDialogComponent,
    DeleteRegistersDialogComponent,

    DetailRegistersDialogComponent,
    CalendarDialogComponent,
    DeleteCalendarDialogComponent,
    EditCalendarDialogComponent

]

@NgModule({
    declarations: [...components],
    imports: [
        MaterialModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [...components]
})

export class SharedModule { }