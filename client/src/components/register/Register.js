import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container } from 'semantic-ui-react';
import { Button, Divider } from 'semantic-ui-react';
import { InputField } from '../shared/form/InputField';
import RegisterBackground from 'img/register-image.jpg';
import { connect } from 'react-redux';
import * as actions from '../../actions/authActions';

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
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
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		const { history } = this.props;

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		this.props.dispatch(actions.registerUser(newUser, history));
	};
	render() {
		const { errors } = this.state;
		return (
			<Container>
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<h2>Register</h2>
							<form noValidate onSubmit={this.handleSubmit}>
								<InputField
									name="name"
									type="text"
									label="Your Name"
									value={this.state.value}
									onChange={this.onChange}
									error={errors.name}
								/>
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
								<InputField
									name="password2"
									type="password"
									label="Confirm Password"
									value={this.state.value}
									onChange={this.onChange}
									error={errors.password2}
								/>
								<Divider hidden />
								<Button type="submit" secondary>
									Register
								</Button>
							</form>
						</Grid.Column>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<Image src={RegisterBackground} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

Register.propTypes = {
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps)(withRouter(Register));
