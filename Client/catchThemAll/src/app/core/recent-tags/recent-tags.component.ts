import { Component } from '@angular/core';
import { ITags } from 'src/app/Interfaces/Tags';

@Component({
  selector: 'app-recent-tags',
  templateUrl: './recent-tags.component.html',
  styleUrls: ['./recent-tags.component.scss']
})

export class RecentTagsComponent {



  pythonTag: ITags = { name: "Python", count: 200 }
  javaTag: ITags = { name: "Java", count: 20000 }
  LuaTag: ITags = { name: "Lua", count: 1600 }

  allTags = [this.pythonTag, this.javaTag, this.LuaTag]
  constructor() { }

  ngOnInit(): void {
  }

  //if count in tag is over 1 000 it will change on 1k 
  //another example 20 000 = 20k

}
