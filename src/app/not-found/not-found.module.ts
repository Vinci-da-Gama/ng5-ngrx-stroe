import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRouteModule } from './not-found-route.module';
import { NotfoundPageComponent } from './notfound-main/notfound-page.component';

@NgModule({
	imports: [
		CommonModule,
		NotFoundRouteModule
	],
	declarations: [
		NotfoundPageComponent
	]
})
export class NotFoundModule { }
