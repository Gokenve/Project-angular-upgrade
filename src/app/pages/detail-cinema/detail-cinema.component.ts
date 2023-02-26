import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICinema } from 'src/app/core/services/models/cinema.models';

import { cinemas } from 'src/app/core/services/data/moked-data/cinemas.data';


@Component({
  selector: 'app-detail-cinema',
  templateUrl: './detail-cinema.component.html',
  styleUrls: ['./detail-cinema.component.scss']
})
export class DetailCinemaComponent {
  public cinema?: ICinema;

constructor (private activatedRoute: ActivatedRoute) {
  this.activatedRoute.params.subscribe((params) => {
    const cimemaId = params['id'];
    this.cinema = cinemas.find(cinema => cinema._id === cimemaId);
  })
}

}
