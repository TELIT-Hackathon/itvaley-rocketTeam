import {Injectable} from '@angular/core';
import {map} from "rxjs";
import {IUser} from "../Interfaces/User";
import {HttpClient} from "@angular/common/http";
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
          localStorage.setItem('username', user.username);
          localStorage.setItem('role', user.role);
          this.router.navigateByUrl('/').then(() => {
            window.location.reload()
          })
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
          this.router.navigateByUrl('/').then(() => {
            window.location.reload()
          })
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }
}
