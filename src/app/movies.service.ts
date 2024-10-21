import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, SearchMovie } from './movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private http: HttpClient) {}

  key = '6c3a2d45';
  url = `http://www.omdbapi.com/?apikey=${this.key}&`;

  getMovieByTitle(title: string, plot = 'short'): Observable<Movie> {
    return this.http.get<Movie>(this.url + `plot=${plot}&t=${title}`);
  }

  getMovieById(id: string, plot = 'short'): Observable<Movie> {
    return this.http.get<Movie>(this.url + `plot=${plot}&i=${id}`);
  }

  searchMovieByTitle(title: string, plot = 'short'): Observable<SearchMovie> {
    return this.http.get<SearchMovie>(this.url + `plot=${plot}&s=${title}`);
  }
}
