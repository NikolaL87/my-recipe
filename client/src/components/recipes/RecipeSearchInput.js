import React from 'react';

const RecipeSearchInput = () => (
  <form>
    <div className="ui icon input">
      <input id="search" type="search" required placeholder='Search your favourite meal...' />
    </div>
  </form>
);

export default RecipeSearchInput;
