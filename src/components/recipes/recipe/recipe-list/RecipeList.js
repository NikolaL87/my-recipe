import React, { Component } from 'react';
import RecipeListItems from './RecipeListItems';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class Recipe extends Component {
	UNSAFE_componentWillMount() {
		this.props.dispatch(actions.getRecipes());
	}

	render() {
		const { recipes } = this.props;
		return <RecipeListItems recipes={recipes} />;
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes.data
	};
}

export default connect(mapStateToProps)(Recipe);
