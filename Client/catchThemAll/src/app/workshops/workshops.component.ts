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
  currentUserSource: IUser | any;
  Role!: string;
  user: IUser | undefined;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.currentUserSource = this.accountService.returnUser();
    this.user = {
      email: "richard@gmail.com",
      userName: "richard",
      token: "1",
      role: "Expert"
    }

    this.Role = this.user.role;
  }

}
