import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
// Importing list of cinemas
import { cinemas } from 'src/app/core/services/data/moked-data/cinemas.data';
// Importing cinemas interface
import { ICinema } from 'src/app/core/services/models/cinema.models';

@Component({
  selector: 'app-list-cinemas',
  templateUrl: './list-cinemas.component.html',
  styleUrls: ['./list-cinemas.component.scss']
})
export class ListCinemasComponen implements OnInit, OnChanges, OnDestroy {
  // Creating cinemas variable
  public cinemas: ICinema[] = cinemas;
  // Declaring actual section (page) to be used into the filter's component
  public actualSection: string= 'listCinemas';
  // Initializing filter's cinemas input
  public filter: string = '';
  // Initializing filter's cinemas input
  //public filteredCinemas?: ICinema[];

  constructor() {
    //! Para dependencias (servicios, pipes, ...)
  }
  // Function to remove cinemas from the list
  public onRemove(id: string): void {
    if (!id) { return; }
    this.cinemas = this.cinemas.filter(cinema => cinema._id !== id)
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
