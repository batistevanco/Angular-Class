import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Movie } from '../Models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiURL = 'json/MockMovies.json';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiURL).pipe(
      tap((result) => {
        console.log('opgehaalde movies:', result);
      })
    );
  }

  getMovie(id: number): Observable<Movie | undefined> {
    return this.getMovies().pipe(
      map((movies) => movies.find((movie) => movie.Id === id))
    );
  }
}
