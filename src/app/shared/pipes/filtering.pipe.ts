import { Pipe, PipeTransform } from '@angular/core';
import { IApiMovie } from 'src/app/core/services/data/api-lists/models/api-movie.models';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(movies: IApiMovie[], filter: string = ''): IApiMovie[] {
    
    if (filter.length === 0) { return movies; }

    const filteredMovies: IApiMovie[] = [];

    for (const movie of movies) {
        if (movie.title.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
          filteredMovies.push(movie);
          console.log(movie.title)
        }
    }
    /*const filteredMovies = movies.filter((movie) => {
      movie.title.toLowerCase().includes(filter.trim().toLowerCase());
      movie.director.toLowerCase().includes(filter.trim().toLowerCase());
      movie.genre.map(genre =>{
        genre.includes(filter);
      });
      movie.cast?.map(actor => {
        actor.toLocaleLowerCase().includes(filter.trim().toLocaleLowerCase());
      });
      
    });*/
    return filteredMovies;
    
  }

}
