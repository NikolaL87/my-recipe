import React from 'react';
import {Link} from 'react-router-dom';
import RecipeSearchInput from '../recipes/RecipeSearchInput';

const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo">Logo</Link>
        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <RecipeSearchInput />
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to='/recipes'>Ideas</Link>
          </li>
          <li>
            <Link to='/my-recipes'>My Recipes</Link>
          </li>
          <li>
            <Link to='/use-up-leftovers'>Use Up Leftovers</Link>
          </li>
        </ul>
      </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">Javascript</a></li>
      <li><a href="mobile.html">Mobile</a></li>
    </ul>
  </header> 
);

export default Header;