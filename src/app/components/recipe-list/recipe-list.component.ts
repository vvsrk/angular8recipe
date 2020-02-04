import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe';
import {Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  newRecipe: Recipe;
  useDarkBackGround;
  fontSize: string;
  currentStyles: any;
  recipesLoaded = false;

  constructor(private router: Router, private recipeService: RecipeService) {
    this.useDarkBackGround = false;
    this.newRecipe = Recipe.createBlank();
    this.fontSize = '150%';
    this.currentStyles = {'font-size': '150%'};
  }

  ngOnInit() {
     this.recipeService.getAllRecipes().then((value) => {
       this.recipes = value;
       this.recipesLoaded = true;
     });
  }


  public displayZoomInRecipe(passingRecipe) {
    console.log(JSON.stringify(passingRecipe, null, 2));
    // console.log(JSON.stringify(passingRecipe));
  }

  public toggleBG() {
    this.useDarkBackGround = !this.useDarkBackGround;
    console.log(this.useDarkBackGround);
  }

  public toggleFont1() {
    if (this.fontSize === '150%') {
      this.fontSize = '175%';
    } else {
      this.fontSize = '150%';
    }
  }
  public toggleFont() {
    if (this.currentStyles['font-size'] === '150%') {
      this.currentStyles['font-size'] = '175%';
    } else {
      this.currentStyles['font-size'] = '150%';
    }
  }

  public userClickedOnRecipe(id: number) {
    console.log('User clicked on Recipe ::' + id);
    this.router.navigateByUrl('/recipes/' + id);
  }

  public addNewRecipe() {
    this.router.navigateByUrl('/addRecipe');

  }

}
