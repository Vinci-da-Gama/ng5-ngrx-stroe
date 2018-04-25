import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from '@featCompo/recipe-start/recipe-start.component';
import { RecipeListComponent } from '../../featCompos/recipe-list/recipe-list.component';
import { RecipeEditComponent } from '../../featCompos/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from '../../featCompos/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '@featCompo/recipe-list/recipe-item/recipe-item.component';
import { SharedModule } from '../../app/shared-modules/shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
	declarations: [
		RecipesComponent,
		RecipeStartComponent,
		RecipeListComponent,
		RecipeEditComponent,
		RecipeDetailComponent,
		RecipeItemComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RecipesRoutingModule,
		SharedModule
	]
})
export class RecipesModule { }
