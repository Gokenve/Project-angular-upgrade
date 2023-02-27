import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from 'src/app/core/services/models/movie.models';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(movies: IMovie[], filter: string = ''): IMovie[] {
    
    if (filter.length === 0) {
      return movies;
    }
    const filteredMovies = movies.filter((movie) => {
      movie.title.toLowerCase().includes(filter.trim().toLowerCase());
      /*movie.director.toLowerCase().includes(filter.trim().toLowerCase());
      movie.genre.map(genre =>{
        genre.includes(filter);
      });
      movie.cast?.map(actor => {
        actor.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase());
      });*/
      debugger

    });
    return filteredMovies;
    
  }

}
