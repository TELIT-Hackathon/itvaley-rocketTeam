import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { HeaderComponent } from './header/header.component';
import {AppModule} from "../app.module";
import {ProfileNavComponent} from "./profile-nav/profile-nav.component";



@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    ProfileNavComponent
  ],
  imports: [
    CommonModule,
  ],
    exports: [
      NavBarComponent,
      HeaderComponent,
      ProfileNavComponent
    ]
})
export class CoreModule { }
