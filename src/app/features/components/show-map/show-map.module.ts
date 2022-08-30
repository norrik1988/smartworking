import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ShowDashboardComponent } from './show-dashboard/show-dashboard.component';
import { ShowMapComponent } from './show-map.component';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
    declarations: [ShowDashboardComponent, ShowMapComponent],
    imports: [
        CommonModule,
        SharedModule,
        MaterialModule,
        FormsModule,
        DashboardModule,
        RouterModule.forChild([
            {
                path: '', component: ShowMapComponent,
                children: [
                    { path: 'show-dashboard', component: ShowDashboardComponent }
                ]
            }
        ])
    ]
})
export class ShowMapModule { }