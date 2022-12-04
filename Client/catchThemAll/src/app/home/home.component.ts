
import {Component, ViewEncapsulation} from '@angular/core';
import {IssuesService} from "../Services/issues.service";
import {Issue, Tags} from "../Interfaces/Issues";
import {UserInfo} from "../Interfaces/UserInfo";
import {IssuesData} from "../Interfaces/IssuesData";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  issuesList : IssuesData [] = [];
  tagsList: Tags [] = [];
  public role : string = "";

  constructor(private issueService: IssuesService) {}
  ngOnInit(): void {
    this.getIssues();

  }


  getIssues(){
    this.issueService.getAllIssues().subscribe((response: Issue[]) =>{
      for(let i=0;i<response.length; i++){
        let data = {} as IssuesData;

        data.issueId = response[i].issueId;
        data.date = response[i].date;
        data.title = response[i].title;
        data.isSolved = response[i].isSolved;
        console.log(data.isSolved)
        data.text = response[i].text;
        data.username = response[i].username;
        this.issueService.getUserInfo(response[i].username).subscribe((response: UserInfo) =>{
          data.role = response.role;
        });
        data.tags = response[i].tags;

        this.issuesList.push(data);

      }
      this.issuesList.sort((a, b) => (a.issueId> b.issueId ? -1 : 1));
    });

  }

  onSubmit(){

  }
}
