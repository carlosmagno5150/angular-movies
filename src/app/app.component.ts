import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    setTimeout(() => {


      this.moviesInTheaters = [{
        title: 'spider-man',
        releaseDate: new Date(),
        price: 14.99
      }, {
        title: 'iron-man',
        releaseDate: new Date(),
        price: 19.99
      },{
        title: 'spider-man',
        releaseDate: new Date(),
        price: 14.99
      }, {
        title: 'iron-man',
        releaseDate: new Date(),
        price: 19.99
      },{
        title: 'spider-man',
        releaseDate: new Date(),
        price: 14.99
      }, {
        title: 'iron-man',
        releaseDate: new Date(),
        price: 19.99
      },{
        title: 'spider-man',
        releaseDate: new Date(),
        price: 14.99
      }, {
        title: 'iron-man',
        releaseDate: new Date(),
        price: 19.99
      },{
        title: 'spider-man',
        releaseDate: new Date(),
        price: 14.99
      }, {
        title: 'iron-man',
        releaseDate: new Date(),
        price: 19.99
      },{
        title: 'spider-man',
        releaseDate: new Date(),
        price: 14.99
      }, {
        title: 'iron-man',
        releaseDate: new Date(),
        price: 19.99
      },{
        title: 'spider-man',
        releaseDate: new Date(),
        price: 14.99
      }, {
        title: 'iron-man',
        releaseDate: new Date(),
        price: 19.99
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
    }, 1000);
  }

  title = 'angular-movies';
  moviesInTheaters;
  moviesFutureReleases;

  handleRating(rate:number){
    alert(`the user selected ${rate}`);
  }

}
