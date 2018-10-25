import {
	GET_RECIPES_INIT,
	GET_RECIPES_SUCCESS,
	GET_RECIPES_FAIL,
	GET_RECIPE_INIT,
	GET_RECIPE_SUCCESS,
	GET_RECIPE_FAIL,
	GET_RECIPE_BY_ID_INIT,
	GET_RECIPE_BY_ID_SUCCESS,
  GET_RECIPE_BY_ID_FAIL,
  GET_MY_RECIPE_INIT,
  GET_MY_RECIPE_SUCCESS,
  GET_MY_RECIPE_FAIL
} from './types';
import axios from 'axios';

// RECIPES ACTIONS TYPES
const getRecipesInit = () => {
	return {
		type: GET_RECIPES_INIT
	};
};

const getRecipesSuccess = recipes => {
	return {
		type: GET_RECIPES_SUCCESS,
		recipes
	};
};

const getRecipesFail = errors => {
	return {
		type: GET_RECIPES_FAIL,
		errors
	};
};

// RECIPE ACTIONS TYPES
const getRecipeInit = () => {
	return {
		type: GET_RECIPE_INIT
	};
};

const getRecipeSuccess = recipe => {
	return {
		type: GET_RECIPE_SUCCESS,
		recipe
	};
};

const getRecipeFail = errors => {
	return {
		type: GET_RECIPE_FAIL,
		errors
	};
};

// RECIPE BY ID ACTION TYPES
const getRecipeByIdInit = () => {
	return {
		type: GET_RECIPE_BY_ID_INIT
	};
};

const getRecipeByIdSuccess = recipeSelected => {
	return {
		type: GET_RECIPE_BY_ID_SUCCESS,
		recipeSelected
	};
};

const getRecipeByIdFail = errors => {
	return {
		type: GET_RECIPE_BY_ID_FAIL,
		errors
	};
};

// MY RECIPE ACTIONS TYPES
const getMyRecipeInit = () => {
	return {
		type: GET_MY_RECIPE_INIT
	};
};

const getMyRecipeSuccess = myRecipe => {
	return {
		type: GET_MY_RECIPE_SUCCESS,
		myRecipe
	};
};

const getMyRecipeFail = errors => {
	return {
		type: GET_MY_RECIPE_FAIL,
		errors
	};
};

export const getRecipes = () => dispatch => {
	dispatch(getRecipesInit());
	axios
		.get('http://localhost:3000/recipes')
		.then(res => res.data)
		.then(recipes => dispatch(getRecipesSuccess(recipes)))
		.catch(({ response }) => dispatch(getRecipesFail(response.data.errors)));
};

export const getRecipe = () => dispatch => {
	dispatch(getRecipeInit());
	axios
		.get(`http://localhost:3000/recipe`)
		.then(res => res.data)
		.then(recipe => dispatch(getRecipeSuccess(recipe)))
		.catch(({ response }) => dispatch(getRecipeFail(response.data.errors)));
};

export const getRecipeById = recipeSelected => dispatch => {
	dispatch(getRecipeByIdInit());
	axios
		.get(`http://localhost:3000/recipe/${recipeSelected}`)
		.then(res => res.data)
		.then(recipe => dispatch(getRecipeByIdSuccess(recipe)))
		.catch(({ response }) => dispatch(getRecipeByIdFail(response.data.errors)));
};

export const getMyRecipe = () => dispatch => {
	dispatch(getMyRecipeInit());
	axios
		.get(`http://localhost:3000/my-recipes`)
		.then(res => res.data)
		.then(myRecipe => dispatch(getMyRecipeSuccess(myRecipe)))
		.catch(({ response }) => dispatch(getMyRecipeFail(response.data.errors)));
};

export const createMyRecipe = (myRecipeData) => {
  return axios.post(`http://localhost:3000/my-recipes`, myRecipeData).then(
    res => res.data,
    err => Promise.reject(err.response.data.errors)
  )
}
