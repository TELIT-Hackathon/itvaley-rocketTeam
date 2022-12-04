import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Issue} from "../Interfaces/Issues";
import {UserInfo} from "../Interfaces/UserInfo";
import {IssuesData} from "../Interfaces/IssuesData";

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  url: string = "https://localhost:7032/"
  constructor(private http: HttpClient) { }

  getAllIssues(){
    return this.http.get<Issue[]>(this.url+"Issue/GetAllIssue");
  }

  getUserInfo(username : string){
    return this.http.get<UserInfo>(this.url+"User/GetUserInfo?username="+username)
  }

  addIssues(issuesData: IssuesData){
    return this.http.post<IssuesData>(this.url+"Issue/AddIssue",issuesData);
  }
}
