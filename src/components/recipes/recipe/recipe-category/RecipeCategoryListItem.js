import React, { Component } from 'react';
import { Card, Image, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class RecipeCategoryListItem extends Component {
	UNSAFE_componentWillMount() {
		this.props.dispatch(actions.getRecipe());
	}

	getRecipeItem() {
		const { recipe } = this.props;
		const { category } = this.props.match.params;

		return recipe.map((item, index) => {
			return item.category === category ? (
				<Grid.Column key={index} width={4}>
					<Card as={Link} to={`/recipe/${item.category}/${item.id}`}>
						<Image src={item.recipeImage} />
						<Card.Content>
							<Card.Header>{item.recipeTitle}</Card.Header>
							<Card.Meta>
								<span className="date">{item.category}</span>
							</Card.Meta>
						</Card.Content>
					</Card>
				</Grid.Column>
			) : null;
		});
	}

	render() {
		return (
			<Container>
				<Grid>
					<Grid.Row>{this.getRecipeItem()}</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.recipe.data
	};
}

export default connect(mapStateToProps)(RecipeCategoryListItem);
