import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class RecipeDetail extends Component {
	UNSAFE_componentWillMount() {
		const recipeId = this.props.match.params.id;

		this.props.dispatch(actions.getRecipeById(recipeId));
	}

	render() {
		const { recipe } = this.props;

		return (
			<div>
				<img src={recipe.recipeImage} alt="Nesto" />
				<div>{recipe.recipeTitle}</div>
				<div>
					{recipe.recipeDetail &&
						recipe.recipeDetail.map((detailItem, index) => {
							return <div key={index}>{detailItem.detail}</div>;
						})}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.recipe.data
	};
}

export default connect(mapStateToProps)(RecipeDetail);
