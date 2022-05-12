import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { CardComponent } from "./components/card/card.component";
import { AddDialogComponent } from "./components/dialog/add-dialog/dialog.component";
import { DeleteDialogComponent } from "./components/dialog/delete-dialog/dialog-delete.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { SearchComponent } from "./components/search/search.component";

const components = [
    CardComponent,
    AddDialogComponent,
    DeleteDialogComponent,
    PaginationComponent,
    SearchComponent,
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