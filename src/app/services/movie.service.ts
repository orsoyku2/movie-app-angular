import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  url: string = 'http://localhost:3000/movies';
  newUrl:string=""
  constructor(private http: HttpClient) {}

  getMovies(categoryId:number): Observable<Movie[]> {
    if(categoryId){
      this.newUrl = this.url + "?categoryId="+categoryId
      return this.http.get<Movie[]>(this.newUrl);
    }
    return this.http.get<Movie[]>(this.url);
  }
  getMoviesById(id:number):Observable<Movie>{
      this.newUrl = this.url +"?id="+id;
      return this.http.get<Movie>(this.newUrl);
  }
  createMovie(movie:Movie):Observable<Movie>{
    return this.http.post<Movie>(this.url,movie);
  }
}
