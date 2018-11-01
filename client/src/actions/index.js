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
	GET_MY_RECIPE_BY_ID_ERROR,
	POST_FILE_UPLOAD_INIT,
	POST_FILE_UPLOAD_SUCCESS,
	POST_FILE_UPLOAD_ERROR
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

const getRecipesError = errors => {
	return {
		type: GET_RECIPES_ERROR,
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

const getRecipeError = errors => {
	return {
		type: GET_RECIPE_ERROR,
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

const getRecipeByIdError = errors => {
	return {
		type: GET_RECIPE_BY_ID_ERROR,
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

const getMyRecipeError = errors => {
	return {
		type: GET_MY_RECIPE_ERROR,
		errors
	};
};

// MY RECIPE BY ID ACTIONS TYPES
const getMyRecipeByIdInit = () => {
	return {
		type: GET_MY_RECIPE_BY_ID_INIT
	};
};

const getMyRecipeByIdSuccess = myRecipeSelected => {
	return {
		type: GET_MY_RECIPE_BY_ID_SUCCESS,
		myRecipeSelected
	};
};

const getMyRecipeByIdError = errors => {
	return {
		type: GET_MY_RECIPE_BY_ID_ERROR,
		errors
	};
};
export const getRecipes = () => dispatch => {
	dispatch(getRecipesInit());
	axios
		.get('http://localhost:3000/recipes')
		.then(res => res.data)
		.then(recipes => dispatch(getRecipesSuccess(recipes)))
		.catch(({ response }) => dispatch(getRecipesError(response.data.errors)));
};

export const getRecipe = () => dispatch => {
	dispatch(getRecipeInit());
	axios
		.get(`http://localhost:3000/recipe`)
		.then(res => res.data)
		.then(recipe => dispatch(getRecipeSuccess(recipe)))
		.catch(({ response }) => dispatch(getRecipeError(response.data.errors)));
};

export const getRecipeById = recipeSelected => dispatch => {
	dispatch(getRecipeByIdInit());
	axios
		.get(`http://localhost:3000/recipe/${recipeSelected}`)
		.then(res => res.data)
		.then(recipe => dispatch(getRecipeByIdSuccess(recipe)))
		.catch(({ response }) => dispatch(getRecipeByIdError(response.data.errors)));
};

export const getMyRecipe = () => dispatch => {
	dispatch(getMyRecipeInit());
	axios
		.get(`http://localhost:3000/my-recipes`)
		.then(res => res.data)
		.then(myRecipe => dispatch(getMyRecipeSuccess(myRecipe)))
		.catch(({ response }) => dispatch(getMyRecipeError(response.data.errors)));
};

export const getMyRecipeById = myRecipeSelected => dispatch => {
	dispatch(getMyRecipeByIdInit());
	axios
		.get(`http://localhost:3000/my-recipes/${myRecipeSelected}`)
		.then(res => res.data)
		.then(recipe => dispatch(getMyRecipeByIdSuccess(recipe)))
		.catch(({ response }) => dispatch(getMyRecipeByIdError(response.data.errors)));
};

export const createMyRecipe = myRecipeData => {
	return axios
		.post(`http://localhost:3000/my-recipes`, myRecipeData)
		.then(res => res.data, err => Promise.reject(err.response.data.errors));
};

// FILE UPLOAD ACTION TYPES
export const postFileUploadInit = () => {
	return {
		type: POST_FILE_UPLOAD_INIT
	};
};

const postFileUploadSuccess = file => {
	return {
		type: POST_FILE_UPLOAD_SUCCESS,
		file
	};
};

const postFileUploadError = errors => {
	return {
		type: POST_FILE_UPLOAD_ERROR,
		errors
	};
};

export const postFileUploadData = myRecipeData => dispatch => {
	dispatch(postFileUploadInit());
	return axios
		.post('https://api.cloudinary.com/v1_1/vwphfplv/image/upload', myRecipeData, {
			headers: { 'X-Requested-With': 'XMLHttpRequest' }
		})
		.then(res => res.data)
		.then(file => dispatch(postFileUploadSuccess(file)))
		.catch(({ response }) => dispatch(postFileUploadError(response.data.errors)));
};
