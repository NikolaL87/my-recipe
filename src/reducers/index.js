import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import { recipesReducer } from './recipesReducer';
import { selectedRecipeReducer } from './recipesReducer';

export default combineReducers({
	errors: errorReducer,
	recipes: recipesReducer,
	recipe: selectedRecipeReducer
});
