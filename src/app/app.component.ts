import { Component } from '@angular/core';
import { DataItem } from '../shared/data.item';
import { DataItemService } from '../shared/data.item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ DataItemService ]
})
export class AppComponent {
  title = 'sh-front-end';
  dataIsLoaded = false;
  items: DataItem[];

  constructor(private dataItemService: DataItemService) { }

  ngOnInit() {
    this.items = this.dataItemService.getItems();
    this.dataIsLoaded = true;
  }
}
