import { RouterModule } from '@angular/router';
//import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListMoviesComponent } from './list-movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    ListMoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    ListMoviesRoutingModule,
    RouterModule,
    SharedModule,
    CoreModule
  ],
  exports: [
  ]
})
export class ListMoviesModule { }
