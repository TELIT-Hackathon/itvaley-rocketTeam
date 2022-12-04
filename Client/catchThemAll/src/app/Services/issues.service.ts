import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Issue} from "../Interfaces/Issues";

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  url: string = "https://localhost:7032/"
  constructor(private http: HttpClient) { }

  getAllIssues(){
    return this.http.get<Issue[]>(this.url+"Issue/GetAllIssue");
  }
}
