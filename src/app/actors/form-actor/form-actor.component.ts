import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: actorCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name: ['', { validators: [Validators.required]}],
      dateOfBirth: '',
      picture: '',
      biography: ''
    });

    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(image){
    this.form.get('picture').setValue(image);
  } 

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  changeMarkdown(content){
    this.form.get('biography').setValue(content);
  }

}
