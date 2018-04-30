import * as authActions from './auth.actions';

export interface AuthStateInterface {
	token: string;
	isAuthen: boolean;
}

const initialState: AuthStateInterface = {
	token: '',
	isAuthen: false
}

export function authReducer(state = initialState, action: authActions.AuthActions) {
	switch (action.type) {
		case (authActions.SIGNUP):
		case (authActions.LOGIN):
			return {
				...state,
				isAuthen: true
			};
		case (authActions.LOGOUT):
			return {
				...state,
				token: null,
				isAuthen: false
			};
		case (authActions.SET_TOKEN):
			const tokenObj = {
				...state,
				token: action.payload
			};
			console.log('33 -- token obj: ', tokenObj);
			return tokenObj;
		default:
			return state;
	}
}
