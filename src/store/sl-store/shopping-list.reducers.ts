import * as slActions from './shopping-list.actions';

import { Ingredient } from '../../contracts/models/ingredient.model';

export interface AppState {
	shoppingList: State
}

export interface State {
	ingredients: Ingredient[];
	editedIngredient: Ingredient;
	editedIngredientIndex: number;
}

const initialState: State = {
	ingredients: [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10),
	],
	// below 2 r for reload correct ingredients, because above ingredients may be deleted.
	// if we load whole module, then the thing deleted will come back again.
	editedIngredient: null,
	editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: slActions.ShoppingListActions) {
	switch (action.type) {
		case slActions.ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload]
			};
		case slActions.ADD_INGREDIENTS:
			return {
				...state,
				ingredients: [...state.ingredients, ...action.payload]
			};
		case slActions.UPDATE_INGREDIENT:
			const ingredient = state.ingredients[state.editedIngredientIndex];
			const ingredients = [...state.ingredients];
			const updatedIngredient = {
				...ingredient,
				...action.payload.ingredient
			};
			ingredients[state.editedIngredientIndex] = updatedIngredient;
			return {
				...state,
				ingredients: ingredients,
				editedIngredient: null,
				editedIngredientIndex: -1
			};
		case slActions.DELETE_INGREDIENT:
			const oldIngredients = [...state.ingredients];
			oldIngredients.splice(state.editedIngredientIndex, 1);
			return {
				...state,
				ingredients: oldIngredients,
				editedIngredient: null,
				editedIngredientIndex: -1
			};
		case slActions.START_EDIT:
			const editedIngredient = { ...state.ingredients[action.payload] };
			const logText = 'here is how to pass index (you donot need to add index every time)';
			console.log('63 -- ' + logText + ', the index is: ', editedIngredient);
			return {
				...state,
				editedIngredient: editedIngredient,
				editedIngredientIndex: action.payload
			};
		case slActions.STOP_EDIT:
			return {
				...state,
				editedIngredient: null,
				editedIngredientIndex: -1
			};
		default:
			return state;
	}
}
