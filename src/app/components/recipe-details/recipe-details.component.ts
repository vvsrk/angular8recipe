import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../model/recipe';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input()
  recipeDetails: Recipe;
  private recipes: Recipe[];
  loadError: boolean;
  errorText: string;
  constructor(private route: ActivatedRoute, private location: Location, private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const recipeId = parseInt(params.get('recipe_id'), 10);
      console.log('recipe_id::' + recipeId);

      this.recipeService.getRecipeById(recipeId).then(value => {
        console.log(value.ingredients);
        this.recipeDetails = value;
      }).catch((err) => {
        this.loadError = true;
        this.errorText = 'Specified recipe doesnt exist';
      });
      // this.recipeDetails = this.findRecipeById(parseInt(params.get('recipe_id'), 10));
    });
  }


  findRecipeById(id: number): Recipe {
    console.log('recipe id::' + id);
    for (const recipe of this.recipes) {
      if (recipe.id === id) {
        return recipe;
      }
    }
    return null;
  }

  public goBack() {
    this.location.back();
  }

}
