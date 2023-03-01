import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ApiListsService } from 'src/app/core/services/data/api-lists/api-lists.service';
//? Importing list of movies
//import { movies } from 'src/app/core/services/data/moked-data/movies.data';
//? Importing movies interface
import { IApiMovie } from 'src/app/core/services/data/api-lists/models/api-movie.models';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit, OnChanges, OnDestroy {
  //? Creating movies variable
  public movies: IApiMovie[] = [];
  //? Declaring actual section (page) to be used into the filter's component
  public actualSection: string= 'listMovies';
  //? Initializing filter's movies input
  public filteredItem: string = '';
  public filter: string = '';
  //public filteredMovies?: IMovie[];
  //public newMoviesList: IMovie[] = [];

  constructor(private moviesService: ApiListsService  ) { 
    //! Para dependencias (servicios, pipes, ...)
    //this.filterInputValue = '';
    //this.filteredMovies = this.movies;
  }

  public ngOnInit(): void {
    //!Petición API? Lógica componente aquí
    this.moviesService.getApiMovies().subscribe((movies) => {
      this.movies = movies;
      console.log(movies);
    });
  }

  //? Function to remove movies from the list
  public onRemove(id: string): void {
    if (!id) { return; }
    this.movies = this.movies.filter(movie => movie._id !== id)
  };

  public ngOnChanges(changes: SimpleChanges): void {
    //!Para los inputs... Emplear mejor setters
  }

  public ngOnDestroy(): void {
    //! Para borrar formularios después de envío? Limpiar promesas vivas, observables y subscripciones.
  }
}
