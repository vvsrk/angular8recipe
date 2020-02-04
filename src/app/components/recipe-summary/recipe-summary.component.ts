import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent implements OnInit {

  @Input()
  recipeSummary: Recipe;

  @Output()
  zoomIn: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  @Output()
  userClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public emitSelectedRecipe() {
    return this.zoomIn.emit(this.recipeSummary);
  }

  public userSelectedRecipe() {
    console.log('User selected recipe::::' + this.recipeSummary.id);
    this.userClick.emit(this.recipeSummary.id);
  }

}
