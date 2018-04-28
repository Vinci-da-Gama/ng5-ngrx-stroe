import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromAppReducer from '../../store/app-store/app.reducers';
import * as fromAuthReducer from '../../store/auth-store/auth.reducer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(
		private store: Store<fromAppReducer.AppState>
	) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log('Intercepted!', req);
		// const copiedReq = req.clone({headers: req.headers.set('', '')});
		return this.store.select('auth')
			// .take(1)
			.first() // take(1) is good, first is better, it has error handler function.
			.switchMap((authState: fromAuthReducer.AuthStateInterface) => {
				console.log('22 -- interceptor token: ', authState.token);
				const copiedReq = req.clone({ params: req.params.set('auth', authState.token) });
				return next.handle(copiedReq);
			});
		// return null;
	}
}
