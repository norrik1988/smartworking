import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";

@NgModule({
    declarations: [
        UsersComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: UsersComponent }
        ])
    ],
    exports: []
})

export class UsersModule {

}