import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { IMovie } from 'src/app/core/services/models/movie.models';

import { movies, moviesGenres } from './../../../core/services/data/moked-data/movies.data';


@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent {

  public moviesGenres: string[] = moviesGenres;
  public buttonType!: string;
  public submitType!: string;
  public movie!: IMovie;
  public movieForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group(
      {
        title: new FormControl('', [Validators.required]),
        director: new FormControl('', [Validators.required]),
        cast: new FormControl(['']),
        year: new FormControl('',[Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]\d*$')]),
        genre: new FormControl([''], [Validators.required]),
        producers: new FormControl(['']),
        script: new FormControl(['']),
        duration: new FormControl(''),
        picture: new FormControl('')
      }
    )
  }

  public submitChoosen(): void {
    this.buttonType === 'crear' ? this.createMovie() : this.updateMovie();
  }

  public createMovie (): void {
    const newId: string= '09f8dflka4352345kfsldl443';
    movies.push( { ...this.movieForm.value, 
      _id: newId }
      );
    this.movieForm.reset();
    console.log(movies);

  };
  
  

  public updateMovie(): void {

  };
   
}
