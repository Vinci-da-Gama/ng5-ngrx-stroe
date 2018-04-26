import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../app/shared-modules/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from '@featCompo/recipe-start/recipe-start.component';
import { RecipeListComponent } from '../../featCompos/recipe-list/recipe-list.component';
import { RecipeEditComponent } from '../../featCompos/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from '../../featCompos/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from '@featCompo/recipe-list/recipe-item/recipe-item.component';

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
		SharedModule,
		NgbModule,
		RecipesRoutingModule,
		ReactiveFormsModule
	]
})
export class RecipesModule { }
