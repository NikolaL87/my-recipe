import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import RecipeCreateForm from './RecipeCreateForm';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../../actions';

class RecipeCreate extends Component {
  constructor(){
    super();

    this.state =  {
      errors: [],
      redirect: false
    }

    this.recipeCategories = ["", "appetizers", "bread", "breakfast", "desserts", "drinks", "salad"]

    this.recipeCreate = this.recipeCreate.bind(this);
  }

  recipeCreate(myRecipeData){
    actions.createMyRecipe(myRecipeData).then(
      (recipe) => this.setState({redirect: true}),
      (errors) => this.setState({errors})
    )
  }

  render() {
    const {redirect} = this.state;

    if(redirect) {
      return <Redirect to={{pathname: '/my-recipes'}} />
    }
    return (
      <Container>
        <React.Fragment>
          <h2>Create Your Own Recipe</h2>
          <RecipeCreateForm options={this.recipeCategories} submitCb={this.recipeCreate} />
        </React.Fragment>
      </Container>
    )
  }
}
export default RecipeCreate;
