import React from 'react';
import RecipeByCategory from './recipeByCategory/RecipeByCategory';
import RecipeByCourse from './recipeByCourse/RecipeByCourse';

const Recipes = () => (
  <React.Fragment>
    <div>This is my recipes</div>
    <RecipeByCategory />
    <RecipeByCourse />
  </React.Fragment>
)

export default Recipes;