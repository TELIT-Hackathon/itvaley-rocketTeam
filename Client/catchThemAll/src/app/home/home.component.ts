
import {Component, ViewEncapsulation} from '@angular/core';
import {IssuesService} from "../Services/issues.service";
import {Issue, Tags} from "../Interfaces/Issues";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  issuesList : Issue [] = [];
  tagsList: Tags [] = [];

  constructor(private issueService: IssuesService) {}
  ngOnInit(): void {
    this.getIssues();

  }


  getIssues(){
    this.issueService.getAllIssues().subscribe((response: Issue[]) =>{
      for(let i=0;i<response.length; i++){
        let data = {} as Issue;
        data.issueId = response[i].issueId;
        data.date = response[i].date;
        data.title = response[i].title;
        data.isSolved = response[i].isSolved;
        console.log(data.isSolved)
        data.text = response[i].text;
        data.username = response[i].username;
        data.tags = response[i].tags;
        this.issuesList.push(data);
      }
    });
  }
}
