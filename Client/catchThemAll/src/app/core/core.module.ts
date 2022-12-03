import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeaderComponent } from './header/header.component';
import { RecentTagsComponent } from './recent-tags/recent-tags.component';



@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    RecentTagsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    HeaderComponent,
    RecentTagsComponent
  ]
})
export class CoreModule { }
