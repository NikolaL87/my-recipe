import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Divider } from 'semantic-ui-react';
import { InputField } from '../shared/form/InputField';
import { validate } from '../shared/form/Validators';
import { connect } from 'react-redux';

class RegisterForm extends Component {
	constructor() {
		super();
		this.state = {
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}
	render() {
		const { errors } = this.state;
		return (
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
		);
	}
}

const mapStateToProps = state => ({
	errors: state.errors
});

RegisterForm = reduxForm({
	// a unique name for the form
	form: 'RegisterForm',
	validate
})(RegisterForm);

export default connect(mapStateToProps)(RegisterForm);
