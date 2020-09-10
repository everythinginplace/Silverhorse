import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Album, User } from './data.item';

@Injectable({providedIn: 'root'})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");  
  }

  getAlbums() {
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums");  
  }

  getUsers() {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");  
  }
}
