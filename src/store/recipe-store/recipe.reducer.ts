import { Ingredient } from '../../contracts/models/ingredient.model';
import { Recipe } from '../../contracts/models/recipe.model';
import * as rActions from './recipe.actions';
import * as fromAppReducer from '../app-store/app.reducers';

export interface RecipeFeatureState extends fromAppReducer.AppState {
	recipes: RecipesStateInterface
}

export interface RecipesStateInterface {
	recipes: Recipe[]
}

const initialRecipeState: RecipesStateInterface = {
	recipes: [
		new Recipe(
			'Tasty Schnitzel',
			'A super-tasty Schnitzel - just awesome!',
			'../../assets/imgs/iconspumpkin.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),
		new Recipe('Big Fat Burger',
			'What else you need to say?',
			'https://i.stack.imgur.com/H334L.png',
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	]
};

export function RecipesReducer(state = initialRecipeState, action: rActions.RecipeActions) {
	switch (action.type) {
		case (rActions.SET_RECIPES):
			console.log('37 -- recipe reducer: ', action.payload);
			return {
				...state,
				recipes: [...action.payload]
			};
		case (rActions.ADD_RECIPE):
			return {
				...state,
				recipes: [...state.recipes, action.payload]
			};
		case (rActions.UPDATE_RECIPE):
			// find old recipe in state
			const recipe = state.recipes[action.payload.index];
			// update old recipe to new one and assign to local const updateRecipe.
			const updateRecipe = {
				...recipe, // container only at thie moment.
				...action.payload.updateRecipe
			};
			// get old recipes array in local const recipes
			const recipes = [...state.recipes];
			// replace old recipe with new recipe.
			recipes[action.payload.index] = updateRecipe;
			return {
				...state,
				recipes: recipes // noew assign local const recipes to store recipes, then merge to state
			};
		case (rActions.DELETE_RECIPE):
			const allRecipes = [...state.recipes];
			const afterDelRecipes = allRecipes.splice(action.payload, 1);
			return {
				...state,
				recipes: afterDelRecipes
			};
		default:
			return state;
	}
}
