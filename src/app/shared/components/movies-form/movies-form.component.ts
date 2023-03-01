import { IApiMovie } from 'src/app/core/services/data/api-lists/models/api-movie.models';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

//? Importing movies for creating a new movie and their genres for being used in a lop of options in the html's select
import { movies, moviesGenres } from '../../../core/services/data/moked-data/movies.data';
import { isNotValidYear } from './validators/year.validator';


@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent {
  //? Genres array to make the loop in the select's options
  public moviesGenres: string[] = moviesGenres;

  public buttonType: string = 'crear';
  public submitType!: string;

  //? Declarating reactive form of movies
  public movieForm: FormGroup;
  
  //? initializing constructor for using reactive forms
  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group(
      {
        _id: new FormControl('', [Validators.required]),
        title: new FormControl('', [Validators.required]),
        director: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]*')]),
        cast: new FormControl([''], [Validators.pattern('[a-z A-Z]*')]),
        year: new FormControl('',[Validators.required, Validators.maxLength(4), Validators.pattern('[0-9]*'), isNotValidYear()]),
        genre: [new FormControl('', [Validators.required])],
        producers: new FormControl(['']),
        script: new FormControl(['']),
        duration: new FormControl(''), 
        picture: new FormControl('')
      }
    )
  }

  //? Function to choose the kind of form is going to be shown
  public formToShow(buttonType: string): void {
    if (this.buttonType === 'crear') {
      this.buttonType = buttonType;
      //this.createMovie();
    } else { 
      this.buttonType = buttonType;
      //this.updateMovie();
    }
  };
  
  public submit() {
    this.buttonType === 'crear' ? this.createMovie() : this.updateMovie();
  }

  //? Function to create a new movie with a form's click event
  public createMovie (): void {
    
    const newId: string= '09f8dflka4352345kfsldl46916';
    
    console.log(this.movieForm.get('cast' as const));
    movies.push({ 
      ...this.movieForm.value, 
      _id: newId,
      /*cast:  this.movieForm.get(['cast']),
      genre: [this.movieForm.get('genre' as const)],
      data_sheet:{
        producers: [this.movieForm.get('producers')],
        script: [this.movieForm.get('script' as const)],
      }*/
    });
    /*movies.map(movie => {
      if (this.movieForm.get(['cast']) === null) { return; }
      movie.cast?.push(this.movieForm.get(['cast']))
    })*/
    this.movieForm.reset();
    //! para poder subir archivos de imagen a la api. Mirar algún tutorial
    //!new File()
  };
  //! Aún por crear
  //? Function to update a movie with a form's click event
  public updateMovie(): void {
    if (!this.movieForm.get('_id')) { return; }
    /*else {
      const movieToUpdate = movies.find(movie => movie._id === this.movieForm.get('_id'));
    }
    movies.push({
      ...this.movieForm.value
    })*/
  };
   
}
