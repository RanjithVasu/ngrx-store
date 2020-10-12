import { Component, OnInit } from '@angular/core';
import { MoviesStore } from '../store/MoviesStore/movies.store';
import { Films } from '../store/models/films.model';
import { NgrxService } from '../shared/ngrx.service';

@Component({
  selector: 'app-main-store-component',
  templateUrl: './main-store-component.component.html',
  styleUrls: ['./main-store-component.component.scss'],
  providers: [MoviesStore],
})
export class MainStoreComponentComponent implements OnInit {

  films: Films[];
  movies$ = this.moviesStore.movies$;
  newMovies: Films = {} as Films


  constructor(private readonly moviesStore: MoviesStore,
    private ngrxservice: NgrxService) { }

  ngOnInit(): void {
//this.movies$.subscribe(data=>console.log("movies",data))
//this.moviesStore.getMovies("ss");
   //this.ngrxservice.getCustomers().subscribe(movies => this.movies$ = movies);
  }

  add(){

    this.moviesStore.addMovie(this.newMovies)
    console.log("this.newMovies")
    console.log(this.newMovies)
    this.moviesStore.createNewMovie(Object.assign({},this.newMovies));
    this.newMovies ={} as Films;


  }
}
