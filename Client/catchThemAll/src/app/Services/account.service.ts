import {Injectable} from '@angular/core';
import {map, of} from "rxjs";
import {IUser} from "../Interfaces/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private currentUserSource?: IUser;
  constructor(private http: HttpClient, private router: Router) {}

  login(values: any) {
    return this.http.post<IUser>('https://localhost:7032/User/Login', values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource = user;
          console.log(user)
          console.log(this.currentUserSource.userName)
        }
      })
    );
  }

  returnUser() {
    return this.currentUserSource;
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
    return this.http.get<IUser>('');
  }

}
