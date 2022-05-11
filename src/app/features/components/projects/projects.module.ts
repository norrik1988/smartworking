import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects.component";
import { CommessaComponent } from './commessa/commessa.component';

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
        ])
    ],
    exports: []
})

export class ProjectsModule { }