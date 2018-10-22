import React, { Component } from 'react';
import RecipeCategoryListItems from './RecipeCategoryListItems';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import {Loader} from '../../../loader/Loader';

class RecipeCategoryList extends Component {
	UNSAFE_componentWillMount() {
		this.props.dispatch(actions.getRecipe());
	}

	render() {
    const recipe = this.props.recipe.data;
    const {isFetching} = this.props.recipe;
		return isFetching ? <Loader /> : <RecipeCategoryListItems recipe={recipe} />;
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.recipe
	};
}

export default connect(mapStateToProps)(RecipeCategoryList);
