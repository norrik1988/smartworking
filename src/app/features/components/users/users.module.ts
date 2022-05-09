import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { UsersComponent } from "./users.component";

@NgModule({
    declarations: [
        UsersComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: UsersComponent }
        ]),
        MaterialModule
    ],
    exports: []
})

export class UsersModule {

}