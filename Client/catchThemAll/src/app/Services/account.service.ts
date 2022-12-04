import { Injectable } from '@angular/core';
import { map, Observable, of } from "rxjs";
import { IUser } from "../Interfaces/User";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Auth } from '../Interfaces/Auth';

@Injectable({
  providedIn: 'root'
})

export class AccountService {


  private serverUrl = "https://localhost:7032/";

  private currentUserSource?: IUser;
  constructor(private http: HttpClient, private router: Router) { }

  private get token(): string | null {
    return localStorage.getItem('token');
  }

  private set token(value: string | null) {
    if (value) {
      localStorage.setItem('token', value);
    } else {
      localStorage.removeItem('token');
    }
  }

  login(auth: Auth) {
    return this.http.post<IUser>(this.serverUrl + "User/Login", auth).pipe(
      map((obj: IUser) => {
        this.token = obj.token
        localStorage.setItem("username", obj.username)
      })
    )
  }


  register(values: any) {
    return this.http.post<IUser>('https://localhost:7032/User/Register', values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource = user;
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    this.currentUserSource = <IUser><unknown>null;
    this.router.navigateByUrl('/');
  }

  loadAccount() {
    return this.http.get<IUser>(this.serverUrl + 'User/GetUserInfo?username=' + localStorage.getItem("username")).pipe(
      map((user: IUser) => {
        localStorage.setItem("role", user.role)
      })
    );
  }

}
