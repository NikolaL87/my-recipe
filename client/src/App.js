import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import * as actions from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'semantic-ui-react';

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Register from './components/register/Register';
import Login from './components/login/Login';
import RecipeList from './components/recipes/recipe/recipe-list/RecipeList';
import RecipeCategoryList from './components/recipes/recipe/recipe-category/RecipeCategoryList';
import RecipeCategoryListItemDetail from './components/recipes/recipe/recipe-category/RecipeCategoryListItemDetail';
import RecipeCreateList from './components/recipes/recipe/recipe-create/RecipeCreateList';
import RecipeCreate from './components/recipes/recipe/recipe-create/RecipeCreate';
import RecipeCreateItemDetail from './components/recipes/recipe/recipe-create/RecipeCreateItemDetail';
import RecipeLeftovers from './components/recipes/recipe/recipe-leftovers/RecipeLeftovers';
import Profile from './components/profile/Profile';

// Check for token
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken);
	// Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken);
	// Set user and isAuthenticated
	store.dispatch(actions.setCurrentUser(decoded));

	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout User
		store.dispatch(actions.logoutUser());
		// TODO: Clear current Profile
		// Redirect to login
		window.location.href = '/login';
	}
}

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
								<Route exact path="/recipes" component={RecipeList} />
								<Route exact path="/recipe/:category" component={RecipeCategoryList} />
								<Route exact path="/recipe/:category/:id" component={RecipeCategoryListItemDetail} />
								<Route exact path="/my-recipes" component={RecipeCreateList} />
								<Route exact path="/my-recipes/create" component={RecipeCreate} />
								<Route exact path="/my-recipes/:id" component={RecipeCreateItemDetail} />
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
