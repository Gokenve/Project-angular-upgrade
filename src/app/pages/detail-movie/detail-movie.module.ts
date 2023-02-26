import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailMovieRoutingModule } from './detail-movie-routing.module';

import { DetailMovieComponent } from './detail-movie.component';



@NgModule({
  declarations: [
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    DetailMovieRoutingModule,
    RouterModule
  ],
  exports: [
  ]
})
export class DetailMovieModule { }
