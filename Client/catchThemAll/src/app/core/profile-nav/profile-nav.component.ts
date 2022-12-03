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

  profileEmail: string | undefined;
  username: string | undefined;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout() {
    this.accountService.logout();
  }

  getEmail(): void {
    this.accountService.loadAccount().subscribe((response: IUser) => {
      this.profileEmail = response.email;
    });
  }

  getUserName() {
    this.accountService.loadAccount().subscribe((response: IUser) =>{
      this.username = response.userName;
    });
  }

}
