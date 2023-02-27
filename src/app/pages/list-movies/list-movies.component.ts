import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
// Importing list of movies
import { movies } from 'src/app/core/services/data/moked-data/movies.data';
// Importing movies interface
import { IMovie } from 'src/app/core/services/models/movie.models';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit, OnChanges, OnDestroy {
  // Creating movies variable
  public movies: IMovie[] = movies;
  // Declaring actual section (page) to be used into the filter's component
  public actualSection: string= 'listMovies';
  // Initializing filter's movies input
  public filter: string = '';
  //public filteredMovies?: IMovie[];
  //public newMoviesList: IMovie[] = [];

  constructor() { 
    //! Para dependencias (servicios, pipes, ...)
    //this.filterInputValue = '';
    //this.filteredMovies = this.movies;
  }
  // Function to remove movies from the list
  public onRemove(id: string): void {
    if (!id) { return; }
    this.movies = this.movies.filter(movie => movie._id !== id)
  };

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
