import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Container, Button, Divider } from 'semantic-ui-react';
import { InputField } from '../shared/form/InputField';
import LoginBackground from 'img/login-image.jpg';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const { isAuthenticated } = this.props.auth;
		if (isAuthenticated) {
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/recipes');
		}
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password
		};

		this.props.dispatch(actions.loginUser(userData));
	};
	render() {
		const { errors } = this.state;
		return (
			<Container>
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<h2>Login</h2>
							<form noValidate onSubmit={this.handleSubmit}>
								<InputField
									name="email"
									type="email"
									label="Your Email"
									value={this.state.value}
									onChange={this.onChange}
									error={errors.email}
								/>
								<InputField
									name="password"
									type="password"
									label="Your Password"
									value={this.state.value}
									onChange={this.onChange}
									error={errors.password}
								/>
								<Divider hidden />
								<Button type="submit" secondary>
									Login
								</Button>
							</form>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<Image src={LoginBackground} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

Login.propTypes = {
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		auth: state.auth,
		errors: state.errors
	};
};

export default connect(mapStateToProps)(Login);
