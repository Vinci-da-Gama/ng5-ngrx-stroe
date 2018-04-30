import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

import * as fromAppReducer from '../../store/app-store/app.reducers';
import * as fromAuthReducer from '../../store/auth-store/auth.reducer';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private store: Store<fromAppReducer.AppState>
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		alert('Check whether you have logged in.');
		return this.store.select('auth')
			.take(1)
			.map((authState: fromAuthReducer.AuthStateInterface) => {
				return authState.isAuthen;
			});
	}
}
