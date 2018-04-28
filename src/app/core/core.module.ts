import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared-modules/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthInterceptor } from '../../services/auth/auth.interceptor';
import { LoggingInterceptor } from '../../services/auth/logging.interceptor';

@NgModule({
	declarations: [
		HeaderComponent
	],
	imports: [
		SharedModule,
		NgbModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
	]
})
export class CoreModule { }
