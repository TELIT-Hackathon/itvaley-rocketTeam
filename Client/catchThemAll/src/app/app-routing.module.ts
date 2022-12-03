import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavBarComponent} from "./core/nav-bar/nav-bar.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nav-bar', component: NavBarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
