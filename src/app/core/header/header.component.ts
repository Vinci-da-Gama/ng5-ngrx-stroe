import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as fromAppReducer from '../../../store/app-store/app.reducers';
import * as fromAuthReducer from '../../../store/auth-store/auth.reducer';
import * as authActions from '../../../store/auth-store/auth.actions';
import * as rActions from '../../../store/recipe-store/recipe.actions';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

	authState: Observable<fromAuthReducer.AuthStateInterface>;

	constructor(
		private store: Store<fromAppReducer.AppState>
	) { }

	ngOnInit() {
		this.authState = this.store.select('auth');
	}

	onSaveData() {
		this.store.dispatch(new rActions.StoreRecipes());
	}

	onFetchData() {
		this.store.dispatch(new rActions.FetchRecipe());
	}

	onLogout() {
		this.store.dispatch(new authActions.Logout());
	}
}
