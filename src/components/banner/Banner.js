import React from 'react';
import RecipeSearchInput from '../recipes/RecipeSearchInput';

const Banner = () => (
	<div className="home-section background">
      <div className='vertical-centered'>
        <h1 className='text-white fz-50'>Search your favourite meal</h1>
        <p className='text-white text-center fz-25'>Cooking is amazing</p>
        <RecipeSearchInput />
      </div>
	</div>
);

export default Banner;
