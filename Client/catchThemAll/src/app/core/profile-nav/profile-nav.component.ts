import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { IUser } from "../../Interfaces/User";
import { AccountService } from "../../Services/account.service";

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {
  currentUser$: IUser | undefined

  username: any;
  role: any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.loadAccount();
    console.log(this.currentUser$)
    this.username = localStorage.getItem("username")
    this.role = localStorage.getItem("role")
  }

  logout() {
    this.accountService.logout();
  }

  getRole(): string {
    return <string>this.currentUser$?.role;
  }

  getUserName() {
    return <string>this.currentUser$?.username;
  }

}
