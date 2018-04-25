import { Component } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../../services/internal/data-storage.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(private dataStorageService: DataStorageService,
		private authService: AuthService) {
	}

	onSaveData() {
		this.dataStorageService.storeRecipes()
			.subscribe(
				(response) => {
					console.log(response);
				}
			);
	}

	onFetchData() {
		this.dataStorageService.getRecipes();
	}

	onLogout() {
		this.authService.logout();
	}
}
