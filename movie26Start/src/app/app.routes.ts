import { Routes } from '@angular/router';
import { About } from './Features/About/Components/about';
import { Admin } from './Features/Admin/Components/admin';
import { Login } from './Features/Login/Components/login';
import { MovieListComponent } from './Features/Movie/Components/movie-list/movie-list-component';
import { MovieDetailComponent } from './Features/Movie/Components/movie-detail/movie-detail-component';

export const routes: Routes = [
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/:id', component: MovieDetailComponent },
    { path: 'admin', component: Admin },
    { path: 'about', component: About },
    { path: 'login', component: Login },
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: '**', redirectTo: 'movies' }
];

