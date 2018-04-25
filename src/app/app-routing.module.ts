import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from '../featCompos/sl-main/shopping-list.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{
		path: 'recipes',
		loadChildren: '../featureModules/recipes/recipes.module#RecipesModule'
	},
	{ path: 'sl', component: ShoppingListComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, {
			useHash: true,
			preloadingStrategy: PreloadAllModules
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
