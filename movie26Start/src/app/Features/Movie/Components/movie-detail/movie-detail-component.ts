import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Movie } from '../../Models/movie.model';
import { MovieService } from '../../Services/movie-service';

@Component({
  selector: 'app-movie-detail-component',
  imports: [AsyncPipe],
  templateUrl: './movie-detail-component.html',
  styleUrl: './movie-detail-component.css',
})
export class MovieDetailComponent {
  movie$: Observable<Movie | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {
    this.movie$ = this.route.params.pipe(
      map((params) => Number(params['id'])),
      switchMap((id) => this.movieService.getMovie(id))
    );
  }

  goBack() {
    this.router.navigate(['/movies']);
  }
}
