import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as fromImgReducer from '../../store/img-intro-store/imgintro.reducer';

@Component({
	selector: 'app-ng5-intro-main',
	templateUrl: './ng5-intro-main.component.html',
	styleUrls: ['./ng5-intro-main.component.scss']
})
export class Ng5IntroMainComponent implements OnInit {

	imgs: Observable<fromImgReducer.ImgIntroStateInterface>

	constructor(
		private store: Store<fromImgReducer.ImgIntroFeatureState>
	) { }

	ngOnInit() {
		this.imgs = this.store.select('imgIntro');
		console.log('22 -- ', this.imgs);
	}

}
