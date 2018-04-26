import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
// import { SharedModule } from './shared-modules/shared/shared.module';
import { AuthModule } from './shared-modules/auth/auth.module'
import { CoreModule } from './core/core.module';
import { HomeModule } from '../featureModules/home-module/home.module';
import { ShoppingListModule } from '../featureModules/shopping-list/shopping-list.module';
import { NotFoundModule } from './not-found/not-found.module';

import { shoppingListReducer } from '../store/sl-store/shopping-list.reducers';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'anytextasid-you-like' }),
		HttpClientModule,
		NgbModule.forRoot(),
		StoreModule.forRoot({
			shoppingList: shoppingListReducer
		}),
		/* SharedModule, */
		AuthModule,
		CoreModule,
		HomeModule,
		ShoppingListModule,
		NotFoundModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
