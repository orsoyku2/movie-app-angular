import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  populerMovies: Movie[] = [];
  searchedWord: string = '';
  searchedDescription: string = '';
  selectedMovie: Movie;

  constructor(
    private alertify: AlertifyService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.movieService
        .getMovies(params.id)
        .pipe(tap(data => console.log("data",data)))
        .subscribe((data) => (this.movies = data))
    );
  }
  modelChanged() {
    this.movies = this.movies.filter((movie) =>
      movie.description.includes(this.searchedDescription.toLowerCase())
    );
  }
  addToList($event: any, movie: Movie) {
    console.log($event.target.classList);
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      $event.target.innerText = 'Remove to List';
      this.alertify.success('Added');
    } else {
      $event.target.innerText = 'Add to List';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
    }
  }
}
