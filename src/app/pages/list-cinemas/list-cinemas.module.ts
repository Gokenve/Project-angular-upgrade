import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCinemasRoutingModule } from './list-cinemas-routing.module';

import { CinemaComponent } from './components/cinema/cinema.component';
import { ListCinemasComponen } from './list-cinemas.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListCinemasComponen,
    CinemaComponent,
  ],
  imports: [
    CommonModule,
    ListCinemasRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
  ]
})
export class ListCinemasModule { }
