import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";

const components = [
    SidebarComponent
]

@NgModule({
    declarations: [...components],
    imports: [],
    exports: []
})
export class CoreModule {

}