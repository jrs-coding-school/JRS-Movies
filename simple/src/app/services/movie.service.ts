import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from 'src/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private activeMovie;

  public newActiveMovie$: Subject<Movie> = new Subject<Movie>();

  constructor() { }

  setActiveMovie(movie) {
    this.activeMovie = movie;
    this.newActiveMovie$.next(this.activeMovie);
  }

  getActiveMovie() {
    return this.activeMovie;
  }
}
