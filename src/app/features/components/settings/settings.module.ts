import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { SettingsComponent } from "./settings.component";
import { GearComponent } from './gear/gear.component';

@NgModule({
    declarations: [
        SettingsComponent,
        GearComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: SettingsComponent,
                children: [
                    { path: 'gear', component: GearComponent }
                ]
            }
        ]),
        SharedModule
    ],
    exports: []
})

export class SettingsModule {

}