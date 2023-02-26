import { moviesGenres } from './../../../../../core/services/data/moked-data/movies.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.scss']
})
export class MoviesFilterComponent {
  
  
  public inputValue?: string;
  public selectFilter: string = 'Título';
  public selectGenre: string = 'Todos';
  public moviesGenres: string[] = moviesGenres;

}
