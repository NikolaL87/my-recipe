import React, { Component } from 'react';
import { Input, Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from 'img/logo.png';

export default class Header extends Component {
	state = { activeItem: 'logo' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu inverted color={'teal'}>
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
          </Menu.Menu>
        </Container>
			</Menu>
		);
	}
}
