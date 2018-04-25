import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundPageComponent } from './notfound-main/notfound-page.component';

const wildcardRoute: Routes = [
	{
		path: 'not-found',
		component: NotfoundPageComponent,
		data: { message: 'Message From Route Data -- Page not found.' }
	},
	{
		path: '**',
		redirectTo: '/not-found'
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(wildcardRoute)
	],
	exports: [RouterModule]
})
export class NotFoundRouteModule { }
