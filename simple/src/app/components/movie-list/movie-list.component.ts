import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/models/movie.model';
import { Movies } from '../../../assets/movies';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = Movies

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  onMovieClicked(i: number) {
    this.movieService.setActiveMovie(this.movies[i])

  }

}
