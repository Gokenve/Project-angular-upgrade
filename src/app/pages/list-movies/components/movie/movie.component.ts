import { Router } from '@angular/router';

import { Component, EventEmitter, Input, Output } from '@angular/core';
//? Importing movies interface
import { IMovie } from 'src/app/core/services/models/movie.models';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  //? Input from loop's html list-movies in order to be used into the html's movie
  @Input() public movie?: IMovie;

  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();

  public buttonType: string = '';

  constructor(private router: Router) { }
  //? Funtion to redirect to movie detail's page whith an event click
  public navigateToDetail(): void {
    if (this.movie) {
      this.router.navigate(['list-movies', this.movie?._id]);
    }
  };
  //? Function to remove movie
  public removeMovie(): void {
    this.onRemove.emit();
  };
  //? Function to redirect user's page to create or update movies
  public toEdit(): void {

  };

}
