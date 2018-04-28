import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
// help to get stored state from effect file.
import 'rxjs/add/operator/withLatestFrom';

import { Recipe } from '../../contracts/models/recipe.model';
import * as fromRecipeReducer from './recipe.reducer';
import * as rActions from './recipe.actions';

@Injectable()
export class RecipeEffects {
	@Effect()
	recipesFetch = this.actions$
		.ofType(rActions.FETCH_RECIPES)
		.switchMap((action: rActions.FetchRecipe) => {
			return this.httpCli.get<Recipe[]>('https://ng5wpk-db.firebaseio.com/recipes.json', {
				observe: 'body',
				responseType: 'json'
			});
			/* const recipesReq = new HttpRequest(
				'GET',
				'https://ng5wpk-db.firebaseio.com/recipes.json',
				{
					reportProgress: true,
					observe: 'body',
					responseType: 'json'
				}
			);
			return this.httpCli.request(recipesReq); */
		})
		.map(
			(recipes) => {
				console.log('33 -- recipesEffect: ', recipes);
				if (recipes !== null) {
					for (const recipe of recipes) {
						if (!recipe['ingredients']) {
							recipe['ingredients'] = [];
						}
					}
					return {
						type: rActions.SET_RECIPES,
						payload: recipes
					};
				} else {
					console.log('45 in recipe effect -- no recipes data in database.');
					return null;
				}
			}
		);

	@Effect({ dispatch: false })
	recipeStore = this.actions$
		.ofType(rActions.STORE_RECIPES)
		.withLatestFrom(this.store.select('recipes'))
		.switchMap(([action, state]) => {
			const req = new HttpRequest(
				'PUT',
				'https://ng5wpk-db.firebaseio.com/recipes.json',
				state.recipes,
				{ reportProgress: true }
			);
			return this.httpCli.request(req);
		});


	constructor(
		public actions$: Actions,
		private httpCli: HttpClient,
		private store: Store<fromRecipeReducer.RecipeFeatureState>
	) { }
}
