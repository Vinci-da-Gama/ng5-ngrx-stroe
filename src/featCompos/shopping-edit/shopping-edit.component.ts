import {
	Component,
	OnInit,
	OnDestroy,
	ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../contracts/models/ingredient.model';
import { Store } from '@ngrx/store';

import * as slActions from '../../store/sl-store/shopping-list.actions';
import * as fromAppReducer from '../../store/app-store/app.reducers';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('f') slForm: NgForm;
	subscription: Subscription;
	editMode = false;
	// editedItemIndex: number;
	editedItem: Ingredient;

	constructor(
		private slStroe: Store<fromAppReducer.AppState>
	) { }

	ngOnInit() {
		this.subscription = this.slStroe.select('shoppingList')
			.subscribe((ingreData) => {
				if (ingreData.editedIngredientIndex > -1) {
					this.editMode = true;
					this.editedItem = ingreData.editedIngredient,
						this.slForm.setValue({
							name: this.editedItem.name,
							amount: this.editedItem.amount
						});
				} else {
					this.editMode = false;
				}
			});
	}

	onSubmit(form: NgForm) {
		const value = form.value;
		const newIngredient = new Ingredient(value.name, value.amount);
		if (this.editMode) {
			this.slStroe.dispatch(new slActions.UpdateIngredient({ ingredient: newIngredient }));
		} else {
			// this.slService.addIngredient(newIngredient);
			this.slStroe.dispatch(new slActions.AddIngredient(newIngredient));
		}
		this.editMode = false;
		form.reset();
	}

	onClear() {
		this.slForm.reset();
		this.editMode = false;
	}

	onDelete() {
		this.slStroe.dispatch(new slActions.DeleteIngredient());
		this.onClear();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
