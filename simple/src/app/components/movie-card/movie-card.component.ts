import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  movie: Movie

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movie = this.movieService.getActiveMovie()

  }



}
