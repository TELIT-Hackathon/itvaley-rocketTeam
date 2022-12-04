import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../Interfaces/User";
import {AccountService} from "../../Services/account.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  currentUser$: Observable<IUser> | undefined

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
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
