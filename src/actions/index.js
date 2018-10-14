import { GET_RECIPES, GET_RECIPE_BY_ID } from './types';

const recipes = [
	{
		id: '1',
		recipeCategory: 'vegan',
		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
		recipeTitle: 'Title 1',
		recipeDetail: [
			{
				detail: 'detail 1'
			},
			{
				detail: 'detail 2'
			}
		]
	},
	{
		id: '2',
		recipeCategory: 'glutten free',
		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
		recipeTitle: 'Title 2',
		recipeDetail: [
			{
				detail: 'detail 3'
			},
			{
				detail: 'detail 4'
			}
		]
	},
	{
		id: '3',
		recipeCategory: 'Hot and spicy',
		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
		recipeTitle: 'Title 3',
		recipeDetail: [
			{
				detail: 'detail 5'
			},
			{
				detail: 'detail 6'
			}
		]
	},
	{
		id: '4',
		recipeCategory: 'Pasta',
		recipeImage: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/antipastozoodlesalad-29c556.jpg',
		recipeTitle: 'Title 4',
		recipeDetail: [
			{
				detail: 'detail 7'
			},
			{
				detail: 'detail 8'
			}
		]
	}
];

export const getRecipes = () => {
	return {
		type: GET_RECIPES,
		recipes
	};
};

export const getRecipeById = recipeId => {
	const recipe = recipes.find(recipe => recipe.id === recipeId);
	return {
		type: GET_RECIPE_BY_ID,
		recipe
	};
};
