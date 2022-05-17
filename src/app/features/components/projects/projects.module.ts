import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ProjectsTableComponent } from "./commessa/projects-table.component";
import { ProjectsComponent } from "./projects.component";


@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectsTableComponent

    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: ProjectsComponent,
                children: [
                    { path: 'projects-table', component: ProjectsTableComponent }
                ]
            }
        ]),
        MaterialModule,
        SharedModule
    ],
    exports: []
})

export class ProjectsModule { }