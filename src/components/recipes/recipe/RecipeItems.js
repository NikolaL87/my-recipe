import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';

class RecipeItems extends Component {
	render() {
		const { recipes } = this.props;
		return (
			<div className="row">
				<div className="items">
					{recipes.map((item, index) => {
						return (
							<div key={index}>
								<RecipeItem item={item} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes.data
	};
}

export default connect(mapStateToProps)(RecipeItems);
