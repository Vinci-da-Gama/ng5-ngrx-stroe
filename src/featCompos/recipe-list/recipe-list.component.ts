import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromRecipeReducer from '../../store/recipe-store/recipe.reducer';


@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	recipeState: Observable<fromRecipeReducer.RecipesStateInterface>;

	constructor(
		private router: Router,
		private aRoute: ActivatedRoute,
		private rStroe: Store<fromRecipeReducer.RecipeFeatureState>
	) { }

	ngOnInit() {
		/* this.subscription = this.recipeService.recipesChanged
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipes = recipes;
				}
			);
		this.recipes = this.recipeService.getRecipes(); */
		this.recipeState = this.rStroe.select('recipes');
	}

	onNewRecipe() {
		this.router.navigate(['new'], { relativeTo: this.aRoute });
	}
}
