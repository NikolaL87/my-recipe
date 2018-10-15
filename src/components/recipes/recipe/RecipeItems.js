import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

class RecipeItems extends Component {
	render() {
		const { recipes } = this.props;
		return (
			<div className="row">
				<div className="items">
					<h2>Recipes by Category</h2>
          <Grid columns='equal'>
            <Grid.Row>
              {recipes.map((item, index) => {
                return (
                  <Grid.Column key={index}>
                    <RecipeItem item={item} />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
					<h2>Recipes by Course</h2>
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
