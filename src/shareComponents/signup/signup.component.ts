import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as fromAppReducer from '../../store/app-store/app.reducers';
import * as authActions from '../../store/auth-store/auth.actions';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	constructor(
		private store: Store<fromAppReducer.AppState>
	) { }

	ngOnInit() {
	}

	onSignup(form: NgForm) {
		const email = form.value.email;
		const password = form.value.password;
		this.store.dispatch(new authActions.TrySignup({
			username: email,
			password: password
		}));
	}

}
