import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ProfileComponent }
        ])
    ],
    exports: []
})

export class ProfileModule { }