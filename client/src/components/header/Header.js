import React, { Component } from 'react';
import { Input, Menu, Container, Dropdown } from 'semantic-ui-react';
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

    const trigger = (
      <Menu.Item className='user-menu'>
        <img
						src={user.avatar}
						alt={user.name}
						style={{ width: '35px', marginRight: '5px', borderRadius: '50%' }}
						title="You must have a Gravatar connect to your email to display an Image"
          />
          {user.name}
      </Menu.Item>
    )
		
		const authLinks = (
      <Dropdown trigger={trigger} pointing='top left' icon={null}>
        <Dropdown.Menu>
          <Dropdown.Item icon='user circle' as={Link} to='/profile' text='Profile' />
          <Dropdown.Item icon='settings' text='Settings' />
          <Dropdown.Item icon='sign out' text='Log Out' onClick={this.onLogoutClick.bind(this) }/>
        </Dropdown.Menu>
      </Dropdown>
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
