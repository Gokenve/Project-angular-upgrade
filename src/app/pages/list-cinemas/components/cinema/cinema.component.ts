import { Router } from '@angular/router';

import { Component, Input, Output, EventEmitter } from '@angular/core';
// Importing cinemas interface
import { IApiCinema } from 'src/app/core/services/data/api-lists/models/api-cinema.models';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent {
  // Input from loop's html list-cinemas in order to be used into the html's cinema
  @Input () public cinema?: IApiCinema

  @Output() public OnRemove: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) { }
  // Funtion to redirect to cinema detail's page whith an event click
  public navigateToDetail(): void {
    if (this.cinema) {
      this.router.navigate(['list-cinemas', this.cinema?._id]);
    }
  };
  //? Function to remove cinema
  public removeCinema(): void {
    this.OnRemove.emit();
  };
  //? Function to redirect user's page to create or update cinemas. This part will be make before because I don't have enough time. The requirement is achived in the list-movies
  public toEdit(): void {

  };

}
