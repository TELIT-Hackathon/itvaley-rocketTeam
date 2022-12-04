import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../Interfaces/User";
import {AccountService} from "../Services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {
  currentUser$!: Observable<IUser>;
  Role!: string;
  user: IUser | undefined;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
    this.user = {
      email: "richard@gmail.com",
      userName: "richard",
      token: "1",
      role: "Expert"
    }

    this.Role = this.user.role;
  }

}