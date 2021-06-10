import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/models/movie.model';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = [
    { title: "test title" },
    { title: 'test 2 the sequel' }]


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

  }

  onMovieClicked(i: number) {
    this.movieService.setActiveMovie(this.movies[i])

  }

}
