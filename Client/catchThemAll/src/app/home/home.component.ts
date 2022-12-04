import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild, ViewEncapsulation} from '@angular/core';
import {take} from 'rxjs/operators';
import {IssuesService} from "../Services/issues.service";
import {Issue, Tags, UserDetail} from "../Interfaces/Issues";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  issuesList : Issue [] = [];
  tagsList: Tags [] = [];
  userDetail: UserDetail [] = [];

  constructor(private _ngZone: NgZone, private issueService: IssuesService) {}
  @ViewChild('autosize') autosize: CdkTextareaAutosize | undefined;
  ngOnInit(): void {
    this.getIssues();

  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize!.resizeToFitContent(true));
  }

  getIssues(){
    this.issueService.getAllIssues().subscribe((response: Issue[]) =>{
      for(let i=0;i<response.length; i++){
        let data = {} as Issue;
        data.issueId = response[i].issueId;
        data.date = response[i].date;
        data.title = response[i].title;
        data.isSolved = response[i].isSolved;
        let tagsData = data.tags;
        for(let j=0; j<tagsData.length; j++){
          let tags = {} as Tags;
          tags.name = tagsData[j].name
          this.tagsList.push(tags)
        }
        this.issuesList.push(data);


      }
    });
  }
}
