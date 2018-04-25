import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
	selector: 'app-notfound-page',
	templateUrl: './notfound-page.component.html'
})
export class NotfoundPageComponent implements OnInit {

	errMsg: String = '';

	constructor(
		private aRoute: ActivatedRoute
	) { }

	ngOnInit() {
		this.aRoute.data.subscribe((msg: Data) => {
			if (msg) {
				this.errMsg = msg['message'];
			}
		});
	}

}
