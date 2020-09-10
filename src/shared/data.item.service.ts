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
        

        // tis works, just want to not test         
        // var posts = this.jsonPlaceholderService.getPosts().subscribe((posts) => {
        //     console.log(" posts = " + posts);
        //     var albums = this.jsonPlaceholderService.getAlbums().subscribe((data) => {
        //         console.log("albums = " + data);
        //         var posts = this.jsonPlaceholderService.getUsers().subscribe((data) => {
        //             console.log("users = " + data);

        //         });
        //     });
        // });        // return [
        //     {
        //       "post": "first post",
        //       "album": "quidem molestiae enim",
        //       "userName": "username"
        //     },
            
        //     {
        //       "post": "second post",
        //       "album": "veni vidi vici", 
        //       "userName": "username2"
        //     }
        //   ];
    }
  }