import { Component } from '@angular/core';
import { DataItem2 } from '../shared/data.item';
import { DataItemService } from '../shared/data.item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sh-front-end';
  dataIsLoaded = false;
  items: DataItem2[];

  constructor(private dataItemService: DataItemService) { }

  ngOnInit() {
    this.dataItemService.getItems().subscribe((data) => {
      var results = [];
      for (let i = 0; i < 1000; i++) {
        var album = this.getRandomItem(data.Albums);
        var user = this.getRandomItem(data.Users);
        var post = this.getRandomItem(data.Posts);
        results.push({ album, user, post });
      }
      this.items = results;
      this.dataIsLoaded = true;
    });
  }

  getRandomItem(array: Array<any>): any {
    return array[Math.floor(Math.random() * array.length)];
  }
}
