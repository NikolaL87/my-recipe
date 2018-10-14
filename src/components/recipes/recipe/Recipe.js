import React, { Component } from 'react';
import RecipeItems from './RecipeItems';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class Recipe extends Component {
	UNSAFE_componentWillMount() {
		this.props.dispatch(actions.getRecipes());
	}

	render() {
		const { recipes } = this.props;
		return <RecipeItems recipes={recipes} />;
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes.data
	};
}

export default connect(mapStateToProps)(Recipe);
