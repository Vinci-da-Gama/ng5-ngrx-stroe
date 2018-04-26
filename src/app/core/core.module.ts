import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared-modules/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../../services/auth/auth.service';
import { DataStorageService } from '../../services/internal/data-storage.service';
import { RecipeService } from '../../services/internal/recipe.service';
import { AuthInterceptor } from '../../services/auth/auth.interceptor';
import { LoggingInterceptor } from '../../services/auth/logging.interceptor';

@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [
		SharedModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
	providers: [
		RecipeService,
		DataStorageService,
		AuthService,
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
	]
})
export class CoreModule { }
