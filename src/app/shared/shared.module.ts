import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { SearchComponent } from "./components/search/search.component";


import { AddProjectDialogComponent } from './components/dialog/project/add-project-dialog/add-project-dialog.component';
import { EditProjectDialogComponent } from './components/dialog/project/edit-project-dialog/edit-project-dialog.component';
import { DeleteProjectDialogComponent } from './components/dialog/project/delete-project-dialog/delete-project-dialog.component';


import { FormsModule } from "@angular/forms";
import { AddUsersDialogComponent } from './components/dialog/users/add-users-dialog/add-users-dialog.component';
import { EditUsersDialogComponent } from './components/dialog/users/edit-users-dialog/edit-users-dialog.component';
import { DeleteUsersDialogComponent } from './components/dialog/users/delete-users-dialog/delete-users-dialog.component';

const components = [
    PaginationComponent,
    SearchComponent,

    AddProjectDialogComponent,
    EditProjectDialogComponent,
    DeleteProjectDialogComponent,

    AddUsersDialogComponent,
    EditUsersDialogComponent,
    DeleteUsersDialogComponent,
]

@NgModule({
    declarations: [...components,],
    imports: [
        MaterialModule,
        FormsModule
    ],
    exports: [...components]
})

export class SharedModule { }