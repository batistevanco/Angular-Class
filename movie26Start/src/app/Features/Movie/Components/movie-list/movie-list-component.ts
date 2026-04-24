import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../Models/movie.model';
import { MovieService } from '../../Services/movie-service';

@Component({
  selector: 'app-movie-list-component',
  imports: [AsyncPipe],
  templateUrl: './movie-list-component.html',
  styleUrl: './movie-list-component.css',
})
export class MovieListComponent {
  movies$: Observable<Movie[]>;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    this.movies$ = new Observable<Movie[]>();
  }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
  }

  goToMovieDetail(movie: Movie) {
    this.router.navigate(['/movies', movie.Id]);
  }
}
