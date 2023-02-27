import { IMovie } from 'src/app/core/services/models/movie.models';
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
  //! Darle una vuelta porque está mal planteado (colocar botones en la zona alta para elegir entre crear y actualizar. Aparecerá crear por defecto. Cambiar a un solo botón de zona baja a enviar). Servirá para saber que función ejecutar, si createMovie o updateMovie
  public submitType!: string;

  //? Declarating reactive form of movies
  public movieForm: FormGroup;
  //? initializing constructor for using reactive forms
  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group(
      {
        _id: new FormControl('', [Validators.required]),
        title: new FormControl('', [Validators.required]),
        director: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
        cast: new FormControl([''], [Validators.pattern('[a-zA-Z]*')]),
        year: new FormControl('',[Validators.required, Validators.maxLength(4), Validators.pattern('[0-9]*'), isNotValidYear()]),
        genre: new FormControl([''], [Validators.required]),
        producers: new FormControl(['']),
        script: new FormControl(['']),
        duration: new FormControl(''),
        picture: new FormControl('')
      }
    )
  }

  //? Function to choose the kind of submit the form is going to do
  public submitChoosen(buttonType: string): void {
    if (this.buttonType === 'crear') {
      this.buttonType = buttonType;
      this.createMovie();
    } else { 
      this.buttonType = buttonType;
      this.updateMovie();
    }
  }
  //? Function to create a new movie with a form's click event
  public createMovie (): void {
    const newId: string= '09f8dflka4352345kfsldl443';
    movies.push({ 
      ...this.movieForm.value, 
      _id: newId
    });
    this.movieForm.reset();
    //! para poder subir archivos de imagen a la api. Mirar algún tutorial
    //!new File()
  };
  //! Aún por crear
  //? Function to update a movie with a form's click event
  public updateMovie(): void {
    /*if (!this.movieForm.get('_id')) { return; }
    else {
      const movieToUpdate = movies.find(movie => movie._id === this.movieForm.get('_id'));
    }
    movies.push({
      ...this.movieForm.value
    })*/
  };
   
}
