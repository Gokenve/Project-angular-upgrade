import { UserComponent } from './pages/user/user.component';
import { MoviesFormComponent } from './shared/components/movies-form/movies-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home',
    loadChildren: ()=> import('./pages/home/home.module').then(m => m.HomeModule)
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
    loadChildren: () => import('./pages/detail-cinema/detail-cinema.module').then(m => m.DetailCinemaModule) 
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:login',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user/:register',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user/:edit',
    loadChildren: () => import('./pages/edit-form/edit-form.module').then(m => m.EditFormModule)
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
