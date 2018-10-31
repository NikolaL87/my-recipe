import {
	GET_RECIPES_INIT,
	GET_RECIPES_SUCCESS,
	GET_RECIPES_ERROR,
	GET_RECIPE_INIT,
	GET_RECIPE_SUCCESS,
	GET_RECIPE_ERROR,
	GET_RECIPE_BY_ID_INIT,
	GET_RECIPE_BY_ID_SUCCESS,
	GET_RECIPE_BY_ID_ERROR,
	GET_MY_RECIPE_INIT,
	GET_MY_RECIPE_SUCCESS,
	GET_MY_RECIPE_ERROR,
	GET_MY_RECIPE_BY_ID_INIT,
	GET_MY_RECIPE_BY_ID_SUCCESS,
	GET_MY_RECIPE_BY_ID_ERROR
} from '../actions/types';

const initialState = {
	recipes: {
		data: [],
		errors: [],
		isFetching: false
	},
	recipe: {
		data: [],
		errors: [],
		isFetching: false
	},
	myRecipe: {
		data: [],
		errors: [],
		isFetching: false
	},
	recipeSelected: {
		data: {},
		errors: []
	},
	myRecipeSelected: {
		data: {},
		errors: []
	}
};

export const recipesReducer = (state = initialState.recipes, action) => {
	switch (action.type) {
		case GET_RECIPES_INIT:
			return { ...state, data: [], errors: [], isFetching: true };
		case GET_RECIPES_SUCCESS:
			return { ...state, data: action.recipes, errors: [], isFetching: false };
		case GET_RECIPES_ERROR:
			return { ...state, errors: [], data: [], isFetching: true };
		default:
			return state;
	}
};

export const recipeReducer = (state = initialState.recipe, action) => {
	switch (action.type) {
		case GET_RECIPE_INIT:
			return { ...state, data: [], errors: [], isFetching: true };
		case GET_RECIPE_SUCCESS:
			return { ...state, data: action.recipe, isFetching: false };
		case GET_RECIPE_ERROR:
			return { ...state, errors: [], data: [], isFetching: true };
		default:
			return state;
	}
};

export const recipeSelectedReducer = (state = initialState.recipeSelected, action) => {
	switch (action.type) {
		case GET_RECIPE_BY_ID_INIT:
			return { ...state, data: [], errors: [], isFetching: true };
		case GET_RECIPE_BY_ID_SUCCESS:
			return { ...state, data: action.recipeSelected, isFetching: false };
		case GET_RECIPE_BY_ID_ERROR:
			return { ...state, errors: [], data: [], isFetching: true };
		default:
			return state;
	}
};

export const myRecipeReducer = (state = initialState.myRecipe, action) => {
	switch (action.type) {
		case GET_MY_RECIPE_INIT:
			return { ...state, data: [], errors: [], isFetching: true };
		case GET_MY_RECIPE_SUCCESS:
			return { ...state, data: action.myRecipe, isFetching: false };
		case GET_MY_RECIPE_ERROR:
			return { ...state, errors: [], data: [], isFetching: true };
		default:
			return state;
	}
};

export const myRecipeSelectedReducer = (state = initialState.myRecipeSelected, action) => {
	switch (action.type) {
		case GET_MY_RECIPE_BY_ID_INIT:
			return { ...state, data: [], errors: [], isFetching: true };
		case GET_MY_RECIPE_BY_ID_SUCCESS:
			return { ...state, data: action.myRecipeSelected, isFetching: false };
		case GET_MY_RECIPE_BY_ID_ERROR:
			return { ...state, errors: [], data: [], isFetching: true };
		default:
			return state;
	}
};
