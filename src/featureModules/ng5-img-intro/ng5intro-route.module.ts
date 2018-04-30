import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng5IntroMainComponent } from '../../featCompos/ng5-intro-main/ng5-intro-main.component';

const ng5introRoute: Routes = [
	{ path: '', component: Ng5IntroMainComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(ng5introRoute)
	],
	exports: [RouterModule]
})
export class Ng5introRouteModule { }
