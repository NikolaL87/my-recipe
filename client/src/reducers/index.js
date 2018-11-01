import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import {
	recipesReducer,
	recipeReducer,
	recipeSelectedReducer,
	myRecipeReducer,
	myRecipeSelectedReducer
} from './recipesReducer';
import { fileUploadReducer } from './fileUploadReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
	recipes: recipesReducer,
	recipe: recipeReducer,
	recipeSelected: recipeSelectedReducer,
	myRecipe: myRecipeReducer,
	myRecipeSelected: myRecipeSelectedReducer,
	file: fileUploadReducer,
	form: formReducer
});
