import { Component } from '@angular/core';

@Component({
  selector: 'app-cinemas-filter',
  templateUrl: './cinemas-filter.component.html',
  styleUrls: ['./cinemas-filter.component.scss']
})
export class CinemasFilterComponent {

  public inputValue?: string;
  public selectFilter: string = 'Nombre';


}
