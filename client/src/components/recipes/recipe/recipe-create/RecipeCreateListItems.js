import React, { Component } from 'react';
import RecipeCreateListItem from './RecipeCreateListItem';
import { Grid, Container, Button, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class RecipeCreateListItems extends Component {
	render() {
		const { myRecipe } = this.props;

		return (
			<Container>
				<h2>My Recipes</h2>
				<Button as={Link} to={'/my-recipes/create'} color={'teal'}>
					Create Recipe
				</Button>
				<Divider hidden />
				<Grid>
					<Grid.Row>
						{myRecipe.map((item, index) => {
							return <RecipeCreateListItem key={index} item={item} />;
						})}
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

export default RecipeCreateListItems;
