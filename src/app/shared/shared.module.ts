import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";


import { AddProjectDialogComponent } from './components/dialog/project/add-project-dialog/add-project-dialog.component';
import { EditProjectDialogComponent } from './components/dialog/project/edit-project-dialog/edit-project-dialog.component';
import { DeleteProjectDialogComponent } from './components/dialog/project/delete-project-dialog/delete-project-dialog.component';

import { AddUsersDialogComponent } from './components/dialog/users/add-users-dialog/add-users-dialog.component';
import { EditUsersDialogComponent } from './components/dialog/users/edit-users-dialog/edit-users-dialog.component';
import { FormsModule } from "@angular/forms";
import { AddRegistersDialogComponent } from "./components/dialog/registers/add-registers-dialog/add-registers-dialog/add-registers-dialog.component";
import { DeleteUsersDialogComponent } from "./components/dialog/users/delete-users-dialog/delete-users-dialog.component";


const components = [
    AddProjectDialogComponent,
    EditProjectDialogComponent,
    DeleteProjectDialogComponent,

    AddUsersDialogComponent,
    EditUsersDialogComponent,
    DeleteUsersDialogComponent,

    AddRegistersDialogComponent,
    // EditRegistersDialogComponent,
    // DeleteRegistersDialogComponent

]

@NgModule({
    declarations: [...components],
    imports: [
        MaterialModule,
        FormsModule
    ],
    exports: [...components]
})

export class SharedModule { }