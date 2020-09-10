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
      var album = data.Albums[0]; // todo randomise
      var user = data.Users[0];
      var post = data.Posts[0];
      for (let i = 0; i < 30; i++) {
          var item = { album, user, post };
          results.push(item);
      }
      this.items = results;
      this.dataIsLoaded = true;
    });
  }
}
