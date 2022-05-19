import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CalendarModule } from "./components/calendar/calendar.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { LoginModule } from "./components/login/login.module";
import { ProfileModule } from "./components/profile/profile.module";
import { ProjectsModule } from "./components/projects/projects.module";
import { SettingsModule } from "./components/settings/settings.module";
import { UsersModule } from "./components/users/users.module";



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ProfileModule,
        ProjectsModule,
        DashboardModule,
        SettingsModule,
        UsersModule,
        LoginModule,
        CalendarModule
    ],
    exports: [],
    declarations: [
      
    ]
})

export class FeaturesModule {

}