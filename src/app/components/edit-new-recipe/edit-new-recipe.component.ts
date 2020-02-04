import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe';
import {RecipeService} from '../../services/recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  newRecipe: Recipe;
  constructor(private recipeService: RecipeService, private router: Router) {
    this.newRecipe = Recipe.createBlank();
  }

  ngOnInit() {
  }

  public addRecipe() {
    console.log('adding new recipe..');
    console.log(JSON.stringify(this.newRecipe));
  }

  public addIngredientPressed(): void {
    console.log('add Ingredient');
    if (!this.newRecipe.ingredients) {
      this.newRecipe.ingredients = [{ ingredient: null, measure: null }];
    } else {
      this.newRecipe.ingredients.push({ ingredient: null, measure: null });
    }
  }

  public removeIngredientAtIndex(index: number): void {
    console.log('remove Ingredient at ' + index);
    this.newRecipe.ingredients.splice(index, 1);
  }

  addInstructionPressed(): void {
    if (!this.newRecipe.instructions) {
      this.newRecipe.instructions = [ { instruction: null, photo: null } ];
    } else {
      this.newRecipe.instructions.push({ instruction: null, photo: null } );
    }
  }

  removeInstructionAtIndex(index): void {
    this.newRecipe.instructions.splice(index, 1);
  }

  addRecipeClicked(): void {
    console.log('add recipe clicked');
    this.newRecipe.id = this.recipeService.recipes.length + 1;
    this.recipeService.addNewRecipe(this.newRecipe);
    this.router.navigate(['recipes', this.newRecipe.id]);
  }
}
