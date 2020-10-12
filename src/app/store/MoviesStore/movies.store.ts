import { Injectable } from '@angular/core';
import {ComponentStore}from '@ngrx/component-store'
import { Films } from '../models/films.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NgrxService } from 'src/app/shared/ngrx.service';

export interface MoviesState {
  films: Films[];
  userPreferredMoviesIds: string[];
}

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {

  constructor(private ngrxservice: NgrxService) {
    super({
      films:[],
      userPreferredMoviesIds:[]
    });


  }

  readonly addMovie = this.updater((state, film: Films) => (
    {
    ...state,
    films: [...state.films,film],
  }));

  readonly addMovies = this.updater((state, film: Films[]) => (
    {
    ...state,
    films: [...state.films,...film],
  }));

  readonly movies$ = this.select(state => state.films);
  readonly userPreferredMovieIds$ = this.select(state => state.userPreferredMoviesIds);

  // readonly userPreferredMovies$ = this.select(
  //   movies$,
  //   userPreferredMovieIds$,
  //   (movies, ids) => movies.filter(id => ids.includes(id)),
  // );
  // readonly getMovie = this.effect((movieId$: Observable<string>) => {
  //   return movieId$.pipe(
  //     // 👇 Handle race condition with the proper choice of the flattening operator.
  //     ((id) => this.ngrxservice.getCustomers().pipe(
  //       //👇 Act on the result within inner pipe.
  //       map((movie) => this.addMovies(movie),),
  //       // 👇 Handle potential error within inner pipe.
  //       catchError(() => EMPTY),
  //     )),
  //   );
  // });

  readonly getMovies = this.effect((movieId$: Observable<string>) => {
    return movieId$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      ((id) => this.ngrxservice.getCustomers().pipe(
        //👇 Act on the result within inner pipe.
        map((movie) => this.addMovies(movie),),
        // 👇 Handle potential error within inner pipe.
        catchError(() => EMPTY),
      )),
    );
  });

  readonly createNewMovie = this.effect((movieData$: Observable<Films>) => {
    return movieData$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      map((data) => this.ngrxservice.createCustomer(data).pipe(
        //👇 Act on the result within inner pipe.
        map((movie) => this.addMovie(movie)),
        // 👇 Handle potential error within inner pipe.
        catchError(() => EMPTY),
      )),
    );
  });


  // readonly createMovie = this.effect((movieId$: Observable<Films>) => {
  //   return movieId$.pipe(
  //     // 👇 Handle race condition with the proper choice of the flattening operator.
  //     (data) => this.ngrxservice.createCustomer(data).pipe(
  //       //👇 Act on the result within inner pipe.
  //       map((movie) => this.addMovie(movie),),
  //       // 👇 Handle potential error within inner pipe.
  //       catchError(() => EMPTY),
  //     ),
  //   );
  // });
}
