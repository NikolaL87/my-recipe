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
        <RecipeCreateForm submitCb={this.recipeCreate} />
      </Container>
    )
  }
}
export default RecipeCreate;
