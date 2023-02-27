import { EditFormComponent } from './pages/user/edit-form/edit-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'list-movies',
    loadChildren: () => import('./pages/list-movies/list-movies.module').then(m => m.ListMoviesModule) 
  },
  { 
    path: 'list-cinemas',
    loadChildren: () => import('./pages/list-cinemas/list-cinemas.module').then(m => m.ListCinemasModule)
  },
  { 
    path: 'list-movies/:id', 
    loadChildren: () => import('./pages/detail-movie/detail-movie.module').then(m => m.DetailMovieModule)
  },
  { 
    path: 'list-cinemas/:id', 
    loadChildren: () => import('./pages/detail-cinema/detail-cinema.module').then(m => m.DetailCinemaModule)  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)},
  {
    path: 'user/:login',
    redirectTo: 'home'
  },
  {
    path: 'user/:register',
    redirectTo: 'home'
  },
  {
    path: 'edit-movie',
    component: EditFormComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
