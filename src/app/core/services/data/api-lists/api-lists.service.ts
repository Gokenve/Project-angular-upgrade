import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiCinema } from './models/api-cinema.models';
import { IApiMovie } from './models/api-movie.models';

const API_LISTS_URL = 'localhost:4000';


@Injectable({
  providedIn: 'root'
})
export class ApiListsService {

  constructor(
    private http: HttpClient
  ) { }

    public getApiMovies(): Observable<IApiMovie[]> {
      return this.http.get<IApiMovie[]>(`localhost:4000/movies`);
    }

    public getApiCinemas(): Observable<IApiCinema[]> {
      return this.http.get<IApiCinema[]>(`${API_LISTS_URL}/cinemas`);
    }

}
