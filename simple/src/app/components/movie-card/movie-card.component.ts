import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  
  movie: Movie
  newMovieSubscription: Subscription;

  constructor(private movieService: MovieService) {
    this.newMovieSubscription = this.movieService
    .newActiveMovie$.subscribe(
      (movie: Movie) => {
        this.movie = movie;
      });
  }

  ngOnInit(): void {

  }



}
