import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {


  @Input() public actualSection!: string;
  //public selectByMovies: string[] = ['Título', 'Género', 'Dirección', 'Reparto'];
  //public selectByCinemas: string[] = ['Nombre', 'Localidad', 'Película'];

}
