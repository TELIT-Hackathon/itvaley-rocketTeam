import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../../Interfaces/User";
import {AccountService} from "../../Services/account.service";

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {
  currentUser$: Observable<IUser> | undefined

  username: any;
  role: any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
    this.username = this.getUserName();
    this.role = this.getRole();
  }

  logout() {
    this.accountService.logout();
  }

  getRole() {
    this.accountService.loadAccount().subscribe((response: IUser) => {
     return response.role;
    });
  }

  getUserName() {
    this.accountService.loadAccount().subscribe((response: IUser) =>{
      return response.userName;
    });
  }

}
