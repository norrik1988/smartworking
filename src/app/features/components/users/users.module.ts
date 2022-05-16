import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { UsersComponent } from "./users.component";
import { UsersTableComponent } from './users-table/users-table.component';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        UsersComponent,
        UsersTableComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: '', component: UsersComponent,
                children: [
                    { path: 'users-table', component: UsersTableComponent }
                ]
            }
        ]),
        SharedModule,
        MaterialModule
    ],
    exports: []
})

export class UsersModule {

}