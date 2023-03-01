import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ApiListsService } from 'src/app/core/services/data/api-lists/api-lists.service';
//? Importing list of cinemas
//import { cinemas } from 'src/app/core/services/data/moked-data/cinemas.data';
//? Importing cinemas interface
import { IApiCinema } from 'src/app/core/services/data/api-lists/models/api-cinema.models';

@Component({
  selector: 'app-list-cinemas',
  templateUrl: './list-cinemas.component.html',
  styleUrls: ['./list-cinemas.component.scss']
})
export class ListCinemasComponen implements OnInit, OnChanges, OnDestroy {
  //? Creating cinemas variable
  public cinemas: IApiCinema[] = [];
  //? Declaring actual section (page) to be used into the filter's component
  public actualSection: string= 'listCinemas';
  //? Initializing filter's cinemas input
  public filter: string = '';
  // Initializing filter's cinemas input
  //public filteredCinemas?: ICinema[];

  constructor(private cinemasService: ApiListsService) {
    //! Para dependencias (servicios, pipes, ...)
  }

  public ngOnInit(): void {
    //!Petición API? Lógica componente aquí
    this.cinemasService.getApiCinemas().subscribe((cinemas) => {
      this.cinemas = cinemas;
    });
  }

  //? Function to remove cinemas from the list
  public onRemove(id: string): void {
    if (!id) { return; }
    this.cinemas = this.cinemas.filter(cinema => cinema._id !== id)
  };

  public ngOnChanges(changes: SimpleChanges): void {
    //!Para los inputs... Emplear mejor setters
  }

  public ngOnDestroy(): void {
    //! Para borrar formularios después de envío? Limpiar promesas vivas, observables y subscripciones.
  }
}
