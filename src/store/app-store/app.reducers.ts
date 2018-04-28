import { ActionReducerMap } from '@ngrx/store';

import * as fromSlReducer from '../sl-store/shopping-list.reducers';
import * as fromAuthReducer from '../auth-store/auth.reducer';

export interface AppState {
	shoppingList: fromSlReducer.State,
	auth: fromAuthReducer.AuthStateInterface
}

export const reducers: ActionReducerMap<AppState> = {
	shoppingList: fromSlReducer.shoppingListReducer,
	auth: fromAuthReducer.authReducer
}
