import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './shared/service/interceptor.service/interceptor.interceptor';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SignInComponent } from './features/components/login/components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [
    SignInComponent,
    {
      provide:
        HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true
    },
    {
      provide:
        MAT_DATE_LOCALE, useValue: 'it-IT'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
