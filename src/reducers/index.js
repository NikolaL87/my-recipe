import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import errorReducer from './errorReducer';
import { recipesReducer } from './recipesReducer';
import { selectedRecipeReducer } from './recipesReducer';

export default combineReducers({
	errors: errorReducer,
	recipes: recipesReducer,
	recipe: selectedRecipeReducer,
	form: formReducer
});
