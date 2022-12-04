import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private router: Router) {

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
}
