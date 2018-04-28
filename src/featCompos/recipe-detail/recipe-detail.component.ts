import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { Recipe } from '../../contracts/models/recipe.model';

import * as fromRecipeReducer from '../../store/recipe-store/recipe.reducer';
import * as slActions from '../../store/sl-store/shopping-list.actions';
import * as rActions from '../../store/recipe-store/recipe.actions';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
	recipeState: Observable<fromRecipeReducer.RecipesStateInterface>;
	id: number;
	closeResult: string;

	constructor(
		private aRoute: ActivatedRoute,
		private router: Router,
		private store: Store<fromRecipeReducer.RecipeFeatureState>,
		private modalService: NgbModal
	) { }

	ngOnInit() {
		this.aRoute.params
			.subscribe(
				(params: Params) => {
					this.id = +params['id'];
					this.recipeState = this.store.select('recipes');
				}
			);
	}

	onAddToShoppingList() {
		this.store.select('recipes')
			.take(1)
			.subscribe((targetRecipeState: fromRecipeReducer.RecipesStateInterface) => {
				this.store.dispatch(new slActions.AddIngredients(
					targetRecipeState.recipes[this.id].ingredients
				));
			});
	}

	openVerticallyCentered(content) {
		this.modalService.open(content, {
			centered: true,
			backdropClass: 'light-blue-backdrop',
			size: 'lg'
		}).result
			.then(
				(result) => {
					this.closeResult = `Closed with: ${result}`;
					if (this.closeResult === 'Closed with: okclick') {
						this.router.navigate(['sl']);
					}
				})
			.catch((reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			});
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	onEditRecipe() {
		this.router.navigate(['edit'], { relativeTo: this.aRoute });
	}

	onDeleteRecipe() {
		this.store.dispatch(new rActions.DelRecipe(this.id));
		this.router.navigate(['/recipes']);
	}

}
