import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeCreateListItem = ({ item }) => {
	return (
		<Grid.Column mobile={16} tablet={8} computer={4}>
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
	);
};

export default RecipeCreateListItem;