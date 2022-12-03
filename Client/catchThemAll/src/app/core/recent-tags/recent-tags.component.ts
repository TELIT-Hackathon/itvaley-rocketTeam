import { Component } from '@angular/core';
import { ITags } from 'src/app/Interfaces/tags';

@Component({
  selector: 'app-recent-tags',
  templateUrl: './recent-tags.component.html',
  styleUrls: ['./recent-tags.component.scss']
})

export class RecentTagsComponent {



  pythonTag: ITags = { name: "Python", count: "200" }
  javaTag: ITags = { name: "Java", count: "20000" }
  LuaTag: ITags = { name: "Lua", count: "1600" }
  allTags = [this.pythonTag, this.javaTag, this.LuaTag]
  constructor() { }

  ngOnInit(): void {
  }

  check() {

  }


}
