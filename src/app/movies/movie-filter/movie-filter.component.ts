import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  genres = [
    { id:1, name: 'Drama'},
    { id:2, name: 'Action'}
  ];

  movies = [
{title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
{title: 'Iron-Man', poster: 'https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_UY268_CR3,0,182,268_AL_.jpg'},
];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges.subscribe(values =>{
      //console.log(values)
      this.movies = this.originalMovies;
      this.filterMovies(values);

    })    
  }

filterMovies(values: any){
  if(values.title){
    this.movies = this.movies.filter(m=> m.title.indexOf(values.title) !== -1);
  }
}

  clearForm(){
    this.form.reset();
  }

}
