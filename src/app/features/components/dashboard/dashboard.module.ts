import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from './home/home.component';

const declarations = [
    DashboardComponent,
    HomeComponent,
]

@NgModule({
    declarations: [...declarations],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild([
            {
                path: '', component: DashboardComponent,
                children: [
                    { path: 'dashboard', component: HomeComponent }
                ]
            }
        ]),
        FormsModule,
        SharedModule
    ],
    exports: [...declarations]
})

export class DashboardModule { }