import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavBarComponent} from "./core/nav-bar/nav-bar.component";
import {ProfileNavComponent} from "./core/profile-nav/profile-nav.component";
import {LoginComponent} from "./account/login/login.component";
import {RegisterComponent} from "./account/register/register.component";
import {WorkshopsComponent} from "./workshops/workshops.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'profile-nav', component: ProfileNavComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'workshops', component: WorkshopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
