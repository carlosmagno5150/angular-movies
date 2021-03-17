import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  model: movieDTO = { title: "spider Man", inTheaters : true, summary: "whatever", releaseDate: new Date(), trailer:'abcde', poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      {

      });
  }

  saveChanges(movie: movieCreationDTO) {

  }

}
