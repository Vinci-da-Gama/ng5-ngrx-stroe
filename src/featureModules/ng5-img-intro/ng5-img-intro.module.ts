import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng5IntroMainComponent } from '../../featCompos/ng5-intro-main/ng5-intro-main.component';
import { Ng5introRouteModule } from './ng5intro-route.module';

import { StoreModule } from '@ngrx/store';
import { Ng5ImgIntroReducer } from '../../store/img-intro-store/imgintro.reducer';

@NgModule({
	declarations: [
		Ng5IntroMainComponent
	],
	imports: [
		CommonModule,
		StoreModule.forFeature('imgIntro', Ng5ImgIntroReducer),
		Ng5introRouteModule
	]
})
export class Ng5ImgIntroModule { }
