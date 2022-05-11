import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
    declarations: [
        ProfileComponent,
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '', component: ProfileComponent,
                children: [
                    { path: 'user-profile', component: UserProfileComponent }
                ]
            }
        ])
    ],
    exports: []
})

export class ProfileModule { }