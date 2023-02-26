import { Router } from '@angular/router';

import { Component, Input } from '@angular/core';
import { ICinema } from 'src/app/core/services/models/cinema.models';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent {

  @Input () public cinema?: ICinema

  constructor(private router: Router) { }

  public navigateToDetail(): void {
    if (this.cinema) {
      this.router.navigate(['list-cinemas', this.cinema?._id]);
    }
  };

}
