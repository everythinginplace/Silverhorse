import { JsonPlaceholderService } from './json.placeholder.service';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { DataItem2 } from './data.item';

@Injectable({providedIn: 'root'})
export class DataItemService {
    constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

    getItems() {
        return forkJoin({
            Albums: this.jsonPlaceholderService.getAlbums(),
            Users: this.jsonPlaceholderService.getUsers(),
            Posts: this.jsonPlaceholderService.getPosts()
        })
    }
  }