import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from '../../featCompos/sl-main/shopping-list.component';
import { ShoppingEditComponent } from '../../featCompos/shopping-edit/shopping-edit.component';

@NgModule({
	declarations: [
		ShoppingListComponent,
		ShoppingEditComponent
	],
	imports: [
		CommonModule,
		FormsModule
	]
})
export class ShoppingListModule { }
