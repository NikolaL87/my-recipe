import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import RecipeLeftoversItem from './RecipeLeftoversItem';

class RecipeLeftovers extends Component {
	render() {
		return (
			<Container>
				<h2>Use Up Leftovers</h2>
				<p>Choose up to 3 ingredients. We will tell you what you can make!</p>
				<Divider />
				<RecipeLeftoversItem />
			</Container>
		);
	}
}

export default RecipeLeftovers;
