import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeaderComponent } from './header/header.component';
import {AppModule} from "../app.module";
import {ProfileNavComponent} from "./profile-nav/profile-nav.component";
import { RecentTagsComponent } from './recent-tags/recent-tags.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    RecentTagsComponent
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
  exports: [
    NavBarComponent,
    HeaderComponent,
    RecentTagsComponent
  ]
})
export class CoreModule { }
