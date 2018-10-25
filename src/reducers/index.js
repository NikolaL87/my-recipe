import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import errorReducer from './errorReducer';
import {
	recipesReducer,
	recipeReducer,
	recipeSelectedReducer,
	myRecipeReducer,
	myRecipeSelectedReducer
} from './recipesReducer';

export default combineReducers({
	errors: errorReducer,
	recipes: recipesReducer,
	recipe: recipeReducer,
	recipeSelected: recipeSelectedReducer,
	myRecipe: myRecipeReducer,
	myRecipeSelected: myRecipeSelectedReducer,
	form: formReducer
});
