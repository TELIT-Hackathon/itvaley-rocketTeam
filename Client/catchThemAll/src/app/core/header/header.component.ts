import {Component} from '@angular/core';
import {map, Observable} from "rxjs";
import {IUser} from "../../Interfaces/User";
import {AccountService} from "../../Services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
  currentUser$!: Observable<IUser>;
  Role = localStorage.getItem('role')
  user: IUser | undefined;
  isRoleHere = !!localStorage.getItem('role')

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.user = {
      email: "richard@gmail.com",
      username: "richard",
      token: "1",
      role: "Expert"
    }




  }

  logout() {
    this.accountService.logout();
  }

  toLogin() {
    this.router.navigateByUrl('/login');
  }

  toRegister() {
    this.router.navigateByUrl('/register');
  }
}
