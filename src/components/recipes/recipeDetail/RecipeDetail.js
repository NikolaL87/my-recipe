import React, { Component } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

class RecipeDetail extends Component {
	render() {
		const { categoryRecipes } = this.props;
		return <div>{console.log(categoryRecipes)}</div>;
	}
}
export default RecipeDetail;
