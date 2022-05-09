import { NgModule } from "@angular/core";
import { CardComponent } from "./components/card/card.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { SearchComponent } from "./components/search/search.component";

const components = [
    CardComponent,
    DialogComponent,
    PaginationComponent,
    SearchComponent,
]

@NgModule({
    declarations: [...components],
    imports: [],
    exports: []
})

export class SharedModule { }