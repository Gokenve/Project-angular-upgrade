import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { FilterComponent } from './components/filter/filter.component';
import { MoviesFormComponent } from './components/movies-form/movies-form.component';
import { CinemasFormComponent } from './components/cinemas-form/cinemas-form.component';
import { MoviesFilterComponent } from './components/filter/components/movies-filter/movies-filter.component';
import { CinemasFilterComponent } from './components/filter/components/cinemas-filter/cinemas-filter.component';
import { ButtonComponent } from './components/button/button.component';
import { FilteringPipe } from './pipes/filtering.pipe';




@NgModule({
  declarations: [
    FilterComponent,
    ButtonComponent,
    MoviesFormComponent,
    CinemasFormComponent,
    MoviesFilterComponent,
    CinemasFilterComponent,
    FilteringPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    MoviesFormComponent,
    CinemasFormComponent,
    FilterComponent,
    FilteringPipe
  ]
})
export class SharedModule { }
