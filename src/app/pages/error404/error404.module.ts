import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404RoutingModule } from './error404-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Error404Component } from './error404.component';


@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    Error404RoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class Error404Module { }
