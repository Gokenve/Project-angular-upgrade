import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { movies } from 'src/app/core/services/data/moked-data/movies.data';
import { IMovie } from 'src/app/core/services/models/movie.models';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit, OnChanges, OnDestroy {

  public movies: IMovie[] = movies;
  public actualSection: string= 'listMovies';
  public filteredMovies?: IMovie[];

  public removeMovie(id: string): void {
    this.movies = this.movies.filter(movie => movie._id !== id)
  };

  constructor() {
    //! Para dependencias (servicios, pipes, ...)
  }

  public ngOnInit(): void {
    //!Petición API? Lógica componente aquí
  }

  public ngOnChanges(changes: SimpleChanges): void {
    //!Para los inputs... Emplear mejor setters
  }

  public ngOnDestroy(): void {
    //! Para borrar formularios después de envío? Limpiar promesas vivas, observables y subscripciones.
  }

}
