import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Importing cinema's interface
import { IApiCinema } from 'src/app/core/services/data/api-lists/models/api-cinema.models';
// Importing list of cinemas
import { cinemas } from 'src/app/core/services/data/moked-data/cinemas.data';


@Component({
  selector: 'app-detail-cinema',
  templateUrl: './detail-cinema.component.html',
  styleUrls: ['./detail-cinema.component.scss']
})
export class DetailCinemaComponent {
  public cinema?: IApiCinema;

constructor (private activatedRoute: ActivatedRoute) {
  this.activatedRoute.params.subscribe((params) => {
    const cimemaId = params['id'];
    this.cinema = cinemas.find(cinema => cinema._id === cimemaId);
  })
}

}
