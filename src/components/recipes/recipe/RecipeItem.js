import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ item }) => (
	<Card as={Link} to={`/recipes/${item.id}`}>
		<Image src={item.recipeImage} />
		<Card.Content>
			<Card.Header>{item.recipeTitle}</Card.Header>
			<Card.Meta>
				<span className="date">{item.recipeCategory}</span>
			</Card.Meta>
		</Card.Content>
	</Card>
);

export default RecipeItem;
