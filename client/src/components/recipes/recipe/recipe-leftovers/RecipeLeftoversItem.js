import React, { Component } from 'react';
import RecipeLeftoversForm from './RecipeLeftoversForm';

class RecipeLeftoversItem extends Component {
	searchRecipesLeftovers(value) {
		console.log(value);
	}
	render() {
		return <RecipeLeftoversForm submitCb={this.searchRecipesLeftovers} />;
	}
}

export default RecipeLeftoversItem;
