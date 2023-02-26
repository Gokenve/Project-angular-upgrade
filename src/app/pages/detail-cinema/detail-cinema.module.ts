import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCinemaRoutingModule } from './detail-cinema-routing.module';

import { DetailCinemaComponent } from './detail-cinema.component';



@NgModule({
  declarations: [
    DetailCinemaComponent
  ],
  imports: [
    CommonModule,
    DetailCinemaRoutingModule,
    RouterModule
  ],
  exports: [
  ]
})
export class DetailCinemaModule { }
