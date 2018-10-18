import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'semantic-ui-react';

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Recipes from './components/recipes/recipe/Recipe';
import RecipeByCategory from './components/recipes/recipe/RecipeByCategory';
import RecipeDetail from './components/recipes/recipe/RecipeDetail';
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
						<Route exact path="/" component={Banner} />
						<Container fluid>
							<Switch>
								<Route exact path="/recipes" component={Recipes} />
								<Route exact path="/recipes/:id" component={RecipeDetail} />
								<Route exact path="/recipes/:category" component={RecipeByCategory} />
								<Route exact path="/my-recipes" component={RecipeByUser} />
								<Route exact path="/use-up-leftovers" component={RecipeLeftovers} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
								<Route exact path="/profile" component={Profile} />
							</Switch>
						</Container>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
