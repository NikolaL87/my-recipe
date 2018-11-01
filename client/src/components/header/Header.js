import React, { Component } from 'react';
import { Input, Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from 'img/logo.png';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class Header extends Component {
	state = { activeItem: 'logo' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	onLogoutClick(e) {
		e.preventDefault();
		this.props.dispatch(actions.logoutUser());
	}

	render() {
		const { activeItem } = this.state;

		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<React.Fragment>
				<Menu.Item name="logout" onClick={this.onLogoutClick.bind(this)} active={activeItem === 'login'}>
					<img
						src={user.avatar}
						alt={user.name}
						style={{ width: '25px', marginRight: '5px' }}
						title="You must have a Gravatar connect to your email to display an Image"
					/>
					Logout
				</Menu.Item>
			</React.Fragment>
		);

		const guestsLinks = (
			<React.Fragment>
				<Menu.Item
					name="register"
					as={Link}
					to="/register"
					active={activeItem === 'register'}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="login"
					as={Link}
					to="/login"
					active={activeItem === 'login'}
					onClick={this.handleItemClick}
				/>
			</React.Fragment>
		);

		return (
			<Menu stackable inverted color={'teal'}>
				<Container>
					<Menu.Item as={Link} to="/" onClick={this.handleItemClick}>
						<img src={Logo} alt="Logo" />
					</Menu.Item>
					<Menu.Item
						as={Link}
						to="/recipes"
						name="ideas"
						active={activeItem === 'ideas'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={Link}
						to="/my-recipes"
						name="my recipes"
						active={activeItem === 'my recipes'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={Link}
						to="/use-up-leftovers"
						name="use up leftovers"
						active={activeItem === 'use up leftovers'}
						onClick={this.handleItemClick}
					/>
					<Menu.Menu position="right">
						<Menu.Item>
							<Input icon="search" placeholder="Search..." />
						</Menu.Item>
						{isAuthenticated ? authLinks : guestsLinks}
					</Menu.Menu>
				</Container>
			</Menu>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps)(Header);
