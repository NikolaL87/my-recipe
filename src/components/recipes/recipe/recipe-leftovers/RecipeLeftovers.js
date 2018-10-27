import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import RecipeLeftoversItem from './RecipeLeftoversItem';

class RecipeLeftovers extends Component {
	render() {
		return (
			<Container>
				<RecipeLeftoversItem />
			</Container>
		);
	}
}

export default RecipeLeftovers;
