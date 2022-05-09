import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { MaterialModule } from "../material/material.module";
import { SidebarComponent } from "./sidebar/sidebar.component";

const components = [
    SidebarComponent
]

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        MaterialModule,

        AppRoutingModule
    ],
    exports: [...components]
})
export class CoreModule {

}