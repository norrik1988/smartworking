import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects.component";
import { CommessaComponent } from './commessa/commessa.component';
import { MaterialModule } from "src/app/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        ProjectsComponent,
        CommessaComponent,

    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: ProjectsComponent,
                children: [
                    { path: 'comm', component: CommessaComponent }
                ]
            }
        ]),
        MaterialModule,
        SharedModule
    ],
    exports: []
})

export class ProjectsModule { }