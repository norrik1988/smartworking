import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";


import { AddProjectDialogComponent } from './components/dialog/project/add-project-dialog/add-project-dialog.component';
import { EditProjectDialogComponent } from './components/dialog/project/edit-project-dialog/edit-project-dialog.component';
import { DeleteProjectDialogComponent } from './components/dialog/project/delete-project-dialog/delete-project-dialog.component';

import { AddUsersDialogComponent } from './components/dialog/users/add-users-dialog/add-users-dialog.component';
import { EditUsersDialogComponent } from './components/dialog/users/edit-users-dialog/edit-users-dialog.component';
import { DeleteUsersDialogComponent } from './components/dialog/users/delete-users-dialog/delete-users-dialog.component';

import { FormsModule } from "@angular/forms";
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

]

@NgModule({
    declarations: [...components, CalendarDialogComponent, DeleteCalendarDialogComponent, EditCalendarDialogComponent],
    imports: [
        MaterialModule,
        FormsModule
    ],
    exports: [...components]
})

export class SharedModule { }