import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Recipe } from '../../contracts/models/recipe.model';
import { RecipeService } from '../../services/internal/recipe.service';

import * as fromSlReducer from '../../store/sl-store/shopping-list.reducers';
import * as slActions from '../../store/sl-store/shopping-list.actions';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe;
	id: number;

	constructor(private recipeService: RecipeService,
		private aRoute: ActivatedRoute,
		private router: Router,
		private slStore: Store<fromSlReducer.AppState>
	) { }

	ngOnInit() {
		this.aRoute.params
			.subscribe(
				(params: Params) => {
					this.id = +params['id'];
					this.recipe = this.recipeService.getRecipe(this.id);
				}
			);
	}

	onAddToShoppingList() {
		this.slStore.dispatch(new slActions.AddIngredients(this.recipe.ingredients));
	}

	onEditRecipe() {
		this.router.navigate(['edit'], { relativeTo: this.aRoute });
		// this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
	}

	onDeleteRecipe() {
		this.recipeService.deleteRecipe(this.id);
		this.router.navigate(['/recipes']);
	}

}
