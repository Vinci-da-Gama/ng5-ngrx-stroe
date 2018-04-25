import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SharedModule } from './shared-modules/shared/shared.module';
import { ShoppingListModule } from '../featureModules/shopping-list/shopping-list.module';
import { AuthModule } from './shared-modules/auth/auth.module'
import { CoreModule } from './core/core.module';
import { HomeModule } from '../featureModules/home-module/home.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgbModule.forRoot(),
		SharedModule,
		ShoppingListModule,
		AuthModule,
		CoreModule,
		HomeModule,
		NotFoundModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
