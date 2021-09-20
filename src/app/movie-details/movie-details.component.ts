import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService],
})
export class MovieDetailsComponent implements OnInit {
  movieDetail: Movie=null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) =>
      this.movieService
        .getMoviesById(params.id)
        .pipe(tap((value: any) => console.log(value[0])))
        .subscribe((data) => (this.movieDetail = data[0]))
    );
  }
 
}
