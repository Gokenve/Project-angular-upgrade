import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  public filter!: string;

  @Input() public actualSection!: string;
  @Output() public filteredItem: string = this.filter;
  //public selectByMovies: string[] = ['Título', 'Género', 'Dirección', 'Reparto'];
  //public selectByCinemas: string[] = ['Nombre', 'Localidad', 'Película'];

}
