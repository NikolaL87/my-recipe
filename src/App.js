import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import { Container } from 'semantic-ui-react';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Recipes from './components/recipes/Recipes';
import RecipeByUser from './components/recipes/recipeByUser/RecipeByUser';
import RecipeLeftovers from './components/recipes/recipeLeftovers/RecipeLeftovers';
import Profile from './components/profile/Profile';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Container fluid>
              <Route exact path="/" component={Home}/>
              <Route exact path='/recipes' component={Recipes} />
              <Route exact path='/my-recipes' component={RecipeByUser} />
              <Route exact path='/use-up-leftovers' component={RecipeLeftovers} />
              <Route exact path="/profile" component={Profile} />
            </Container>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
