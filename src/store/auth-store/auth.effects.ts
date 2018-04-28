import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fb from 'firebase';
import '../../map-switch-merge';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { UserInterface } from '../../contracts/interfaces/user.interfaces';
import * as authActions from '../../store/auth-store/auth.actions';

@Injectable()
export class AuthEffects {
	@Effect()
	authSignup = this.actions$
		.ofType(authActions.TRY_SIGNUP)
		.map((actions: authActions.TrySignup) => {
			return actions.payload;
		})
		.switchMap((authData: UserInterface) => {
			return fromPromise(
				fb.auth().createUserWithEmailAndPassword(authData.username, authData.password)
			);
		})
		.switchMap(() => {
			return fromPromise(fb.auth().currentUser.getIdToken());
		})
		.mergeMap((token: string) => {
			if (token !== null && token !== '' && token !== undefined) {
				this.router.navigate(['/']);
			}
			return [
				{
					type: authActions.SIGNUP
				},
				{
					type: authActions.SET_TOKEN,
					payload: token
				}
			];
		});

	@Effect()
	authSignin = this.actions$
		.ofType(authActions.TRY_LOGIN)
		.map((action: authActions.TryLogin) => {
			return action.payload;
		})
		.switchMap((authData: UserInterface) => {
			return fromPromise(
				fb.auth().signInWithEmailAndPassword(authData.username, authData.password)
			);
		})
		.switchMap(() => {
			return fromPromise(fb.auth().currentUser.getIdToken());
		})
		.mergeMap((token: string) => {
			if (token !== null && token !== '' && token !== undefined) {
				this.router.navigate(['/']);
			}
			return [
				{
					type: authActions.LOGIN
				},
				{
					type: authActions.SET_TOKEN,
					payload: token
				}
			];
		});

	// it is logout, nothing need to be done anymore
	@Effect({ dispatch: false })
	authLogout = this.actions$
		.ofType(authActions.LOGOUT)
		.do(() => {
			this.router.navigate(['/']);
		});

	constructor(
		private actions$: Actions,
		private router: Router
	) { }
}
