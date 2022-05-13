import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { UsersComponent } from "./users.component";
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
    declarations: [
        UsersComponent,
        UsersTableComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: UsersComponent,
                children: [
                    { path: 'users-table', component: UsersTableComponent }
                ]
            }
        ]),
        MaterialModule
    ],
    exports: []
})

export class UsersModule {

}