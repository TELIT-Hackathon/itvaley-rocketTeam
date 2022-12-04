import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ITags, Tags } from 'src/app/Interfaces/Tags';
import { TagsService } from 'src/app/Services/tags.service';

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

  tags: Tags[] = []
  constructor(private tagsService: TagsService) { }

  ngOnInit(): void {
    const pipeEnd: Observable<Tags[]> = this.tagsService.getTagsList()
    //Catching functions from end pipe for async data, compoment still generate if doesnt get datas
    pipeEnd.subscribe({
      next: tagsArray => this.tags = tagsArray,
      error: error => console.error(error),
      complete: () => console.log("Pipe closed")

    })

  }

  //if count in tag is over 1 000 it will change on 1k 
  //another example 20 000 = 20k
  thousandFormater(number: number): string | number {
    return Math.abs(number) > 999 ? Math.sign(number) * ((Math.abs(number) / 1000)) + 'k' :
      Math.sign(number) * Math.abs(number)
  }
}
