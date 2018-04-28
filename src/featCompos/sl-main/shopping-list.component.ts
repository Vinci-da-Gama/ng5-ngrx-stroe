import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// import { Ingredient } from '../../contracts/models/ingredient.model';
import { IngredientsArrInterface } from '../../contracts/interfaces/ingredients-arr.interface';

import * as slActions from '../../store/sl-store/shopping-list.actions';
import * as fromAppReducer from '../../store/app-store/app.reducers';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

	slIngredientsState: Observable<IngredientsArrInterface>;

	constructor(
		private slStore: Store<fromAppReducer.AppState>
	) { }

	ngOnInit() {
		this.slIngredientsState = this.slStore.select('shoppingList');
	}

	onEditItem(index: number) {
		this.slStore.dispatch(new slActions.StartEdit(index));
	}
}
