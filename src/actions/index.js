import {
	GET_RECIPES,
	GET_RECIPE_BY_ID,
	GET_RECIPES_BY_CATEGORY,
	GET_RECIPE_BY_CATEGORY_ID,
	GET_RECIPES_BY_COURSE,
	GET_RECIPE_BY_COURSE_ID,
	GET_MY_RECIPES,
	POST_MY_RECIPE_ID
} from './types';
import axios from 'axios';

// const recipes = [
// 	{
// 		id: '1',
// 		recipeCategory: 'chicken',
// 		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/spicy-baked-chicken-wings-00e568.jpg',
// 		recipeTitle: 'Spicy Baked Chicken Wings',
// 		recipeDetail: [
// 			{
// 				detail: 'detail 1'
// 			},
// 			{
// 				detail: 'detail 2'
// 			}
// 		]
// 	},
// 	{
// 		id: '2',
// 		recipeCategory: 'glutten free',
// 		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
// 		recipeTitle: 'Title 2',
// 		recipeDetail: [
// 			{
// 				detail: 'detail 3'
// 			},
// 			{
// 				detail: 'detail 4'
// 			}
// 		]
// 	},
// 	{
// 		id: '3',
// 		recipeCategory: 'Hot and spicy',
// 		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
// 		recipeTitle: 'Title 3',
// 		recipeDetail: [
// 			{
// 				detail: 'detail 5'
// 			},
// 			{
// 				detail: 'detail 6'
// 			}
// 		]
// 	},
// 	{
// 		id: '4',
// 		recipeCategory: 'Pasta',
// 		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
// 		recipeTitle: 'Title 4',
// 		recipeDetail: [
// 			{
// 				detail: 'detail 7'
// 			},
// 			{
// 				detail: 'detail 8'
// 			}
// 		]
//   },
//   {
// 		id: '5',
// 		recipeCategory: 'Test 5',
// 		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
// 		recipeTitle: 'Title 5',
// 		recipeDetail: [
// 			{
// 				detail: 'detail 9'
// 			},
// 			{
// 				detail: 'detail 10'
// 			}
// 		]
//   },
//   {
// 		id: '6',
// 		recipeCategory: 'Test 6',
// 		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
// 		recipeTitle: 'Title 6',
// 		recipeDetail: [
// 			{
// 				detail: 'detail 11'
// 			},
// 			{
// 				detail: 'detail 12'
// 			}
// 		]
// 	}
// ];


const getRecipesSuccess = (recipes) => {
	return {
		type: GET_RECIPES,
		recipes
	};
};

export const getRecipes = (recipes) => dispatch => {
  axios.get('http://localhost:3000/recipes', recipes)
    .then(res => res.data)
    .then(recipes => dispatch(getRecipesSuccess(recipes)))
    .catch(err => console.log(err))
};


const getRecipeByIdSuccess = (recipe) => {
	return {
		type: GET_RECIPE_BY_ID,
		recipe
	};
};

export const getRecipeById = (recipeId) => dispatch => {
  axios.get(`http://localhost:3000/recipes/${recipeId}`)
    .then(res => res.data)
    .then(recipe => dispatch(getRecipeByIdSuccess(recipe)))
 

};

export const getRecipesByCategory = recipesByCategory => {
	return {
		type: GET_RECIPES_BY_CATEGORY,
		recipesByCategory
	};
};

export const getRecipeByCategoryId = recipeByCategoryId => {
	return {
		type: GET_RECIPE_BY_CATEGORY_ID,
		recipeByCategoryId
	};
};

export const getRecipesByCourse = recipesByCourse => {
	return {
		type: GET_RECIPES_BY_COURSE,
		recipesByCourse
	};
};

export const getRecipeByCourseId = recipeByCourseId => {
	return {
		type: GET_RECIPE_BY_COURSE_ID,
		recipeByCourseId
	};
};

export const getMyRecipes = myRecipes => {
	return {
		type: GET_MY_RECIPES,
		myRecipes
	};
};

export const postMyRecipe = myRecipe => {
	return {
		type: POST_MY_RECIPE_ID,
		myRecipe
	};
};
