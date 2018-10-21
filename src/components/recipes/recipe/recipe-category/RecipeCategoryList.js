import React, { Component } from 'react';
import RecipeCategoryListItems from './RecipeCategoryListItems';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

class RecipeCategoryList extends Component {
	componentDidMount() {
		this.props.dispatch(actions.getRecipe());
	}

	render() {
		const { recipe } = this.props;
		return <RecipeCategoryListItems recipe={recipe} />;
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.recipe.data
	};
}

export default connect(mapStateToProps)(RecipeCategoryList);
