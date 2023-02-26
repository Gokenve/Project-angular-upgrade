import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { cinemas } from 'src/app/core/services/data/moked-data/cinemas.data';
import { ICinema } from 'src/app/core/services/models/cinema.models';

@Component({
  selector: 'app-list-cinemas',
  templateUrl: './list-cinemas.component.html',
  styleUrls: ['./list-cinemas.component.scss']
})
export class ListCinemasComponen implements OnInit, OnChanges, OnDestroy {

  public cinemas: ICinema[] = cinemas;
  public actualSection: string= 'listCinemas';
  public filteredCinemas?: ICinema[];

  public removeCinema(id: string): void {
    this.cinemas = this.cinemas.filter(cinema => cinema._id !== id)
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
