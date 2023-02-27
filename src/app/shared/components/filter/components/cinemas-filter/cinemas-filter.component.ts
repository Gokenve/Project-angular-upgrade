import { Component } from '@angular/core';

@Component({
  selector: 'app-cinemas-filter',
  templateUrl: './cinemas-filter.component.html',
  styleUrls: ['./cinemas-filter.component.scss']
})
export class CinemasFilterComponent {

  public filter?: string;
  public selectFilter: string = 'Nombre';


}
