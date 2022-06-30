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
import { AddDashboardDialogComponent } from "./components/dialog/dashboard/add-dashboard-dialog/add-dashboard-dialog.component";
import { EditDashboardDialogComponent } from "./components/dialog/dashboard/edit-dashboard-dialog/edit-dashboard-dialog.component";
import { ToMatrixPipe } from "./pipe/toMatrix.pipe";


const components = [
    AddProjectDialogComponent,
    EditProjectDialogComponent,
    DeleteProjectDialogComponent,

    AddUsersDialogComponent,
    EditUsersDialogComponent,
    DeleteUsersDialogComponent,

    EditDashboardDialogComponent,
    AddDashboardDialogComponent,

    CardComponent,
    BlankComponent,

    ToMatrixPipe
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