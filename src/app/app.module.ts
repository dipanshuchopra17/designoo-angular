import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotographerLoginComponent } from './components/photographer-login/photographer-login.component';
import { PhotographerSignupComponent } from './components/photographer-signup/photographer-signup.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotographerLoginComponent,
    PhotographerSignupComponent,
    HomepageComponent,
    HeaderComponent,
    CompleteProfileComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
