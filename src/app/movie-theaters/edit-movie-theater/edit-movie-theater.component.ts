import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheaterCreationDTO, movieTheaterDTO } from '../movie-theater.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheaterDTO = { name : "Agora", latitude:  -23.593604715686222, longitude: -46.68485105037689 };  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      {

      });
  }

  saveChanges(movieThetaer: movieTheaterCreationDTO){
    console.log(movieThetaer);
  }


}
