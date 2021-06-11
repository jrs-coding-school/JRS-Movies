
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/models/movie.model';


const baseURl = "http://localhost:8080"
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private activeMovie;

  public newActiveMovie$: Subject<Movie> = new Subject<Movie>();
  
  constructor(private http: HttpClient) { }

  setActiveMovie(movie) {
    this.activeMovie = movie;
    this.newActiveMovie$.next(this.activeMovie);
  }

  getMovies():Observable<any>{
    return this.http.get(`${baseURl}/api/movies`)
  }

  getActiveMovie() {
    return this.activeMovie;
  }
}
