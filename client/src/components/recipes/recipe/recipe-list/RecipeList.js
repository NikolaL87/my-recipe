import React, { Component } from 'react';
import RecipeListItems from './RecipeListItems';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { Loader } from '../../../loader/Loader';

class Recipe extends Component {
	UNSAFE_componentWillMount() {
		this.props.dispatch(actions.getRecipes());
	}

	render() {
		const recipes = this.props.recipes.data;
		const { isFetching } = this.props.recipes;
		return isFetching ? <Loader /> : <RecipeListItems recipes={recipes} />;
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes
	};
}

export default connect(mapStateToProps)(Recipe);
