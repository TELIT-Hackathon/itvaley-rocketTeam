import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HeaderComponent } from './header/header.component';
import { ProfileNavComponent } from "./profile-nav/profile-nav.component";
import { RecentTagsComponent } from './recent-tags/recent-tags.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    HeaderComponent,
    RecentTagsComponent,
    ProfileNavComponent,
    RecentTagsComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    HeaderComponent,
    ProfileNavComponent,
    RecentTagsComponent
  ]
})
export class CoreModule { }
