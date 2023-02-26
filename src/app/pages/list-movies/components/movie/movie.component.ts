import { Router } from '@angular/router';

import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/core/services/models/movie.models';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  @Input() public movie?: IMovie

  constructor(private router: Router) { }

  public navigateToDetail(): void {
    if (this.movie) {
      this.router.navigate(['list-movies', this.movie?._id]);
    }
  };

  public toRemove(): void {

  };
  public toUpdate(): void {

  };

}
