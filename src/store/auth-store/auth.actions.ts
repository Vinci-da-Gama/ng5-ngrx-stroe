import { Action } from '@ngrx/store';

import { UserInterface } from '../../contracts/interfaces/user.interfaces';

export const TRY_SIGNUP = 'TRY_SIGNUP';
export const SIGNUP = 'SIGNUP';
export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TrySignup implements Action {
	readonly type = TRY_SIGNUP;
	constructor(
		public payload: UserInterface
	) { }
}

export class SignUp implements Action {
	readonly type = SIGNUP;
}

export class TryLogin implements Action {
	readonly type = TRY_LOGIN;
	constructor(
		public payload: UserInterface
	) { }
}

export class Login implements Action {
	readonly type = LOGIN;
}

export class Logout implements Action {
	readonly type = LOGOUT;
}

export class SetToken implements Action {
	readonly type = SET_TOKEN;
	constructor(
		public payload: string
	) { }
}

export type AuthActions = TrySignup | SignUp | TryLogin | Login | Logout | SetToken;
