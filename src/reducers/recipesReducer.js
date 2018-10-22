import { 
  GET_RECIPES_INIT,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAIL,
  GET_RECIPE_INIT,
  GET_RECIPE_SUCCESS,
  GET_RECIPE_FAIL,
  GET_RECIPE_BY_ID_INIT,
  GET_RECIPE_BY_ID_SUCCESS,
  GET_RECIPE_BY_ID_FAIL } from '../actions/types';

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
	recipeSelected: {
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
    case GET_RECIPES_FAIL:
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
      return { ...state, data: action.recipe };
    case GET_RECIPE_FAIL:
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
      return { ...state, data: action.recipeSelected };
    case GET_RECIPE_BY_ID_FAIL:
			return { ...state, errors: [], data: [], isFetching: true };
		default:
			return state;
	}
};
