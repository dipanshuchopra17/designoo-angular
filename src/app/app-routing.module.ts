import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PhotographerLoginComponent } from './components/photographer-login/photographer-login.component';
import { PhotographerSignupComponent } from './components/photographer-signup/photographer-signup.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full' },
  { path: 'login', component: PhotographerLoginComponent },
  { path: 'user_type', component: PhotographerSignupComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'home', component: HomepageComponent },
  { path: '**', component: PhotographerLoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
