import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects.component";

@NgModule({
    declarations: [
        ProjectsComponent,

    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ProjectsComponent }
        ])
    ],
    exports: []
})

export class ProjectsModule { }