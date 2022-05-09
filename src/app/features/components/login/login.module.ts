import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ForgotPswComponent } from "./components/forgot-psw/forgot-psw.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { LoginComponent } from "./login.component";

const components = [
    LoginComponent,
    SignInComponent,
    ForgotPswComponent
]

@NgModule({
    declarations: [...components],
    exports: [...components],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '', component: LoginComponent,
                children: [
                    { path: 'forgot-psw', component: ForgotPswComponent },
                    { path: 'sign-in', component: SignInComponent },
                ]
            }
        ]),
        MaterialModule
    ],
})

export class LoginModule { }