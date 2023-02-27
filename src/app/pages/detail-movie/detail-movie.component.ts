import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Importing movies's interface
import { IMovie } from 'src/app/core/services/models/movie.models';
// Importing list of movies
import { movies } from 'src/app/core/services/data/moked-data/movies.data';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent {
  public movie?: IMovie;

constructor(private activatedroute: ActivatedRoute) {
  this.activatedroute.params.subscribe((params) => {
    const movieId = params['id'];
    this.movie = movies.find(movie => movie._id === movieId);
  })
}

}
