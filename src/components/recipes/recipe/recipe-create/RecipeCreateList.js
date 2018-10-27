import React, { Component } from 'react';
import RecipeCreateListItems from './RecipeCreateListItems';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import { Loader } from '../../../loader/Loader';

class RecipeCreateList extends Component {
	UNSAFE_componentWillMount() {
		this.props.dispatch(actions.getMyRecipe());
	}

	render() {
		const myRecipe = this.props.myRecipe.data;
		const { isFetching } = this.props.myRecipe;

		return isFetching ? (
			<Loader />
		) : (
			<React.Fragment>
				<RecipeCreateListItems myRecipe={myRecipe} />
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		myRecipe: state.myRecipe
	};
}

export default connect(mapStateToProps)(RecipeCreateList);
