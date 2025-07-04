import { Routes } from '@angular/router';
import { FilmesComponent } from './component/home/home.component';
import { AddFilmeComponent } from './component/add_movie/addMovie.component';

export const routes: Routes = [
  { path: '', component: FilmesComponent },
  { path: 'add-filme', component: AddFilmeComponent },
];
