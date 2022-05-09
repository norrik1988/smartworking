import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: DashboardComponent }
        ])
    ],
    exports: []
})

export class DashboardModule { }