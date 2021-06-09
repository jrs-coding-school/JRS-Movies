import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private activeMovie;

  constructor() { }

  setActiveMovie(movie) {
    this.activeMovie = movie;
  }

  getActiveMovie() {
    return this.activeMovie;
  }
}
