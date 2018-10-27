import React, { Component } from 'react';
import RecipeListItem from './RecipeListItem';
import { Grid, Container } from 'semantic-ui-react';

class RecipeListItems extends Component {
	render() {
		const { recipes } = this.props;
		return (
			<Container>
				<h2>Recipes by Category</h2>
				<Grid>
					<Grid.Row>
						{recipes.map((item, index) => {
							return (
								<Grid.Column mobile={16} tablet={8} computer={4} key={index}>
									<RecipeListItem item={item} />
								</Grid.Column>
							);
						})}
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

export default RecipeListItems;
