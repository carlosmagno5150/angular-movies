import { Component, Input, OnInit } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  SelectedItens: multipleSelectorModel[] = [];
  @Input()
  NonSelectedItens: multipleSelectorModel[] = [];

  ngOnInit(): void {
  }
  
  select(item : multipleSelectorModel, index: number){
    this.SelectedItens.push(item);
    this.NonSelectedItens.splice(index,  1);
  }
  deselect(item : multipleSelectorModel, index: number){
    this.NonSelectedItens.push(item);
    this.SelectedItens.splice(index,  1);
  }


  selectAll(){
    this.SelectedItens.push(...this.NonSelectedItens);
    this.NonSelectedItens = [];
  }

  deselectAll(){
    this.NonSelectedItens.push(...this.SelectedItens);
    this.SelectedItens = [];
  }

}
