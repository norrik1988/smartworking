import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { CardComponent } from "./components/card/card.component";
import { AddProjectDialogComponent } from "./components/dialog/projects/add/add-project-dialog.component";
import { DeleteProjectDialogComponent } from "./components/dialog/projects/delete/delete-project-dialog.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { SearchComponent } from "./components/search/search.component";

const components = [
    CardComponent,
    PaginationComponent,
    SearchComponent,
    AddProjectDialogComponent,
    DeleteProjectDialogComponent
]

@NgModule({
    declarations: [...components],
    imports: [
        MaterialModule,
        FormsModule,
        CommonModule
    ],
    exports: [...components]
})

export class SharedModule { }