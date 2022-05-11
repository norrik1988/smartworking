import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
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
        RouterModule.forChild([
            {
                path: '', component: DashboardComponent,
                children: [
                    { path: 'dashboard', component: HomeComponent }
                ]
            }
        ])
    ],
    exports: [...declarations]
})

export class DashboardModule { }