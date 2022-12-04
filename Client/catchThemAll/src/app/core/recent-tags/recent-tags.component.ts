import { Component } from '@angular/core';


@Component({
  selector: 'app-recent-tags',
  templateUrl: './recent-tags.component.html',
  styleUrls: ['./recent-tags.component.scss']
})

export class RecentTagsComponent {



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
