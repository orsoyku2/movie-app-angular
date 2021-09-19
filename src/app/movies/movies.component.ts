
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie'
import { MovieRepository } from '../models/movie.repository';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  movieRepository: MovieRepository;
  populerMovies: Movie[];
  searchedWord:string = "";
  searchedDescription:string = ""
  selectedMovie:Movie;

  constructor(private alertify:AlertifyService, private http:HttpClient) {
 
   }

  ngOnInit(): void {
    this.http.get<Movie[]>('http://localhost:3000/movies').subscribe(data => this.movies = data);
  }
  modelChanged(){
    this.movies = this.movies.filter(movie => movie.description.includes(this.searchedDescription.toLowerCase()))
  }
  addToList($event:any,movie:Movie){
    console.log($event.target.classList)
    if($event.target.classList.contains('btn-primary')){
      $event.target.classList.remove('btn-primary')
      $event.target.classList.add('btn-danger')
      $event.target.innerText='Remove to List';
      this.alertify.success("Added")
    }else{
      $event.target.innerText='Add to List';
      $event.target.classList.remove('btn-danger')
      $event.target.classList.add('btn-primary')
    }

  }
}
