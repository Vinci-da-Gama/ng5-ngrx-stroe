import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromAppReducer from '../../store/app-store/app.reducers';
import * as authActions from '../../store/auth-store/auth.actions';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

	constructor(
		private store: Store<fromAppReducer.AppState>
	) { }

	ngOnInit() {
	}

	onSignin(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		this.store.dispatch(new authActions.TryLogin({
			username: email,
			password: password
		}));
	}

}
