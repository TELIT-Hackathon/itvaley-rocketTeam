import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AccountService} from "../../Services/account.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit{
  constructor(private router: Router, private accountService: AccountService) { }
  toHome() {
    this.router.navigateByUrl("/")
  }

  ngOnInit(): void {
  }
}
