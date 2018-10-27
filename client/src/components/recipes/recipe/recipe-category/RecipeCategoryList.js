import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import RecipeCategoryListItem from './RecipeCategoryListItem';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { Loader } from '../../../loader/Loader';

class RecipeCategoryList extends Component {
	UNSAFE_componentWillMount() {
		this.props.dispatch(actions.getRecipe());
	}

	getRecipeItem() {
		const recipe = this.props.recipe.data;
		const { category } = this.props.match.params;
		const { isFetching } = this.props.recipe;

		if (isFetching) {
			return <Loader />;
		} else {
			return recipe.map((item, index) => {
				return item.category === category ? <RecipeCategoryListItem item={item} key={index} /> : null;
			});
		}
	}

	render() {
		const { category } = this.props.match.params;
		return (
			<Container>
				<Grid>
					<h2>{category}</h2>
					<Grid.Row>{this.getRecipeItem()}</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.recipe
	};
}

export default connect(mapStateToProps)(RecipeCategoryList);
