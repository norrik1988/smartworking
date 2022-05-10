import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { SettingsComponent } from "./settings.component";

@NgModule({
    declarations: [
        SettingsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: SettingsComponent }
        ]),
        SharedModule
    ],
    exports: []
})

export class SettingsModule {

}