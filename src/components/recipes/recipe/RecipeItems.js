import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import { connect } from 'react-redux';
import { Grid, Container } from 'semantic-ui-react'

class RecipeItems extends Component {
	render() {
    const { recipes } = this.props;
		return (
			<Container>
        <h2>Recipes by Category</h2>
          <Grid>
            <Grid.Row>
              {recipes.map((item, index) => {
                console.log(item)
                return (
                  <Grid.Column width={4} key={index}>
                    <RecipeItem item={item} />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
					<h2>Recipes by Course</h2>
      </Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes.data
	};
}

export default connect(mapStateToProps)(RecipeItems);
