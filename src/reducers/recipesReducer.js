import { GET_RECIPES, GET_RECIPE_BY_ID } from '../actions/types';

const initialState = {
	recipes: {
		data: []
	},
	recipe: {
		data: {}
	}
};

export const recipesReducer = (state = initialState.recipes, action) => {
	switch (action.type) {
		case GET_RECIPES:
			return { ...state, data: action.recipes };
		default:
			return state;
	}
};

export const selectedRecipeReducer = (state = initialState.recipe, action) => {
	switch (action.type) {
		case GET_RECIPE_BY_ID:
			return { ...state, data: action.recipe };
		default:
			return state;
	}
};
