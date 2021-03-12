import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      this.moviesInTheaters = [{
        title: 'spider-man',
        releaseDate: new Date(),
        price: 14.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }, {
        title: 'iron-man',
        releaseDate: new Date(),
        price: 19.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg'
      }];

      this.moviesFutureReleases = []
      // {
      //   title: 'harry potter 19',
      //   releaseDate: new Date(),
      //   price: 14.99
      // }, {
      //   title: 'matrix 5',
      //   releaseDate: new Date(),
      //   price: 19.99
      // }];
    }, 100);
  }

  title = 'angular-movies';
  moviesInTheaters;
  moviesFutureReleases;

}
