import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AccountService} from "../../Services/account.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private router: Router, private accountService: AccountService) {

  }
  RedirectTo(id: string): void {
    switch (id) {
      case 'home':
        {
          this.router.navigateByUrl("/")
          break;
        }
      case 'messages':
        {
          this.router.navigateByUrl("/xd")
          break;
        }
      case 'workshops':
        {
          this.router.navigateByUrl("/")
          break;
        }
      case 'projects':
        {
          this.router.navigateByUrl("/")
          break;
        }
    }
  }
  logout(){
    this.accountService.logout();
  }

  toWorkshops() {
    this.router.navigateByUrl('/workshops');
  }
}
