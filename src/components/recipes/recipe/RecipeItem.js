import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ item }) => (
	<Card as={Link} to={`/recipes/${item.id}`}>
		<Image src={item.image} />
		<Card.Content>
			<Card.Header>{item.title}</Card.Header>
			<Card.Meta>
				<span className="date">{item.category}</span>
			</Card.Meta>
		</Card.Content>
	</Card>
);

export default RecipeItem;
