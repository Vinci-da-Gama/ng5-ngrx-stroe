import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AuthModule } from './shared-modules/auth/auth.module'
import { CoreModule } from './core/core.module';
import { HomeModule } from '../featureModules/home-module/home.module';
import { ShoppingListModule } from '../featureModules/shopping-list/shopping-list.module';
import { NotFoundModule } from './not-found/not-found.module';

// import { shoppingListReducer } from '../store/sl-store/shopping-list.reducers';
import { reducers } from '../store/app-store/app.reducers';

import { AuthEffects } from '../store/auth-store/auth.effects';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'anytextasid-you-like' }),
		HttpClientModule,
		NgbModule.forRoot(),
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([AuthEffects]),
		StoreRouterConnectingModule,
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		AuthModule,
		CoreModule,
		HomeModule,
		ShoppingListModule,
		NotFoundModule,
		NgxSpinnerModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
