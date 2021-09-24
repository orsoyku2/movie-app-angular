import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  url: string = 'http://localhost:3000/movies';
  url_firebase: string = 'https://movieapp-fd042-default-rtdb.firebaseio.com/';
  newUrl:string=""
  constructor(private http: HttpClient) {}

  getMovies(categoryId:number): Observable<Movie[]> {
    if(categoryId){
      this.newUrl = this.url_firebase + "?categoryId="+categoryId
      return this.http.get<Movie[]>(this.newUrl);
    }
    return this.http.get<Movie[]>(this.url_firebase);
  }
  getMoviesById(id:number):Observable<Movie>{
      this.newUrl = this.url_firebase +"?id="+id;
      return this.http.get<Movie>(this.newUrl);
  }
  createMovie(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.url_firebase + "/movies.json",movie);
  }
}
