export interface DataItem {
    post: string;
    album: string;
    userName: string;
}

export interface DataItem2 {
  post: Post;
  album: Album;
  user: User;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}