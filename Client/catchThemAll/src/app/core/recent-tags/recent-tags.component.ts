import { Component } from '@angular/core';
import { ITags } from 'src/app/Interfaces/tags';

@Component({
  selector: 'app-recent-tags',
  templateUrl: './recent-tags.component.html',
  styleUrls: ['./recent-tags.component.scss']
})

export class RecentTagsComponent {



  pythonTag: ITags = { name: "Python", count: this.thousandFormater(28880) }
  javaTag: ITags = { name: "Java", count: this.thousandFormater(250) }
  LuaTag: ITags = { name: "Lua", count: this.thousandFormater(108000) }

  allTags = [this.pythonTag, this.javaTag, this.LuaTag]
  constructor() { }

  ngOnInit(): void {
  }

  //if count in tag is over 1 000 it will change on 1k 
  //another example 20 000 = 20k
  thousandFormater(number: number): string | number {
    return Math.abs(number) > 999 ? Math.sign(number) * ((Math.abs(number) / 1000)) + 'k' :
      Math.sign(number) * Math.abs(number)
  }
}
