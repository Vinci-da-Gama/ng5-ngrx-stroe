import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/first';

import * as fromRecipeReducer from '../../store/recipe-store/recipe.reducer';
import * as rActions from '../../store/recipe-store/recipe.actions';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode = false;
	recipeForm: FormGroup;

	constructor(
		private aRoute: ActivatedRoute,
		private router: Router,
		private store: Store<fromRecipeReducer.RecipeFeatureState>
	) { }

	ngOnInit() {
		this.aRoute.params
			.subscribe(
				(params: Params) => {
					this.id = +params['id'];
					this.editMode = params['id'] != null;
					this.initForm();
				}
			);
	}

	onSubmit() {
		// const newRecipe = new Recipe(
		//   this.recipeForm.value['name'],
		//   this.recipeForm.value['description'],
		//   this.recipeForm.value['imagePath'],
		//   this.recipeForm.value['ingredients']);
		if (this.editMode) {
			this.store.dispatch(new rActions.UpdateRecipe({
				index: this.id,
				updateRecipe: this.recipeForm.value
			}));
		} else {
			this.store.dispatch(new rActions.AddRecipe(this.recipeForm.value));
		}
		this.onCancel();
	}

	onAddIngredient() {
		(<FormArray>this.recipeForm.get('ingredients')).push(
			new FormGroup({
				'name': new FormControl(null, Validators.required),
				'amount': new FormControl(null, [
					Validators.required,
					Validators.pattern(/^[1-9]+[0-9]*$/)
				])
			})
		);
	}

	onDeleteIngredient(index: number) {
		(<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
	}

	onCancel() {
		this.router.navigate(['../'], { relativeTo: this.aRoute });
	}

	private initForm() {
		let recipeName = '';
		let recipeImagePath = '';
		let recipeDescription = '';
		const recipeIngredients = new FormArray([]);

		if (this.editMode) {
			this.store.select('recipes')
				.first()
				.subscribe((targetRecipeState: fromRecipeReducer.RecipesStateInterface) => {
					const recipe = targetRecipeState.recipes[this.id];
					recipeName = recipe.name;
					recipeImagePath = recipe.imagePath;
					recipeDescription = recipe.description;
					if (recipe['ingredients']) {
						for (const ingredient of recipe.ingredients) {
							recipeIngredients.push(
								new FormGroup({
									'name': new FormControl(ingredient.name, Validators.required),
									'amount': new FormControl(ingredient.amount, [
										Validators.required,
										Validators.pattern(/^[1-9]+[0-9]*$/)
									])
								})
							);
						}
					}
				});
		}

		this.recipeForm = new FormGroup({
			'name': new FormControl(recipeName, Validators.required),
			'imagePath': new FormControl(recipeImagePath, Validators.required),
			'description': new FormControl(recipeDescription, Validators.required),
			'ingredients': recipeIngredients
		});
	}

	getControls() {
		return (<FormArray>this.recipeForm.get('ingredients')).controls;
	}

}
