import { GET_RECIPES, GET_RECIPE, GET_RECIPE_BY_ID } from './types';
import axios from 'axios';

const getRecipesSuccess = recipes => {
	return {
		type: GET_RECIPES,
		recipes
	};
};

const getRecipeSuccess = recipe => {
	return {
		type: GET_RECIPE,
		recipe
	};
};

const getRecipeByIdSuccess = recipeSelected => {
	return {
		type: GET_RECIPE_BY_ID,
		recipeSelected
	};
};

export const getRecipes = recipes => dispatch => {
	axios
		.get('http://localhost:3000/recipes', recipes)
		.then(res => res.data)
		.then(recipes => dispatch(getRecipesSuccess(recipes)))
		.catch(err => console.log(err));
};

export const getRecipe = recipe => dispatch => {
	axios
		.get(`http://localhost:3000/recipe`, recipe)
		.then(res => res.data)
		.then(recipe => dispatch(getRecipeSuccess(recipe)));
};

export const getRecipeById = recipeSelected => dispatch => {
	axios
		.get(`http://localhost:3000/recipe/${recipeSelected}`)
		.then(res => res.data)
		.then(recipe => dispatch(getRecipeByIdSuccess(recipe)));
};
