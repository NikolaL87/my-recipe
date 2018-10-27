import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class RecipeListItem extends Component {
	render() {
		const { item } = this.props;
		return (
			<Card as={Link} to={`/recipe/${item.category}`}>
				<Image src={item.image} />
				<Card.Content>
					<Card.Header>{item.title}</Card.Header>
				</Card.Content>
			</Card>
		);
	}
}

export default RecipeListItem;
