import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseConfig } from '../environments/firebase.config';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	loadedFeature = 'recipe';

	ngOnInit() {
		firebase.initializeApp(FirebaseConfig.firebase);
	}

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
