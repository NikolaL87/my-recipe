import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Divider } from 'semantic-ui-react';
import { InputField } from '../shared/form/InputField';
import { validate } from '../shared/form/Validators';

let RegisterForm = props => {
	const { handleSubmit, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field name="firstName" component={InputField} placeholder="First Name" type="text" />
			<Field name="email" component={InputField} placeholder="First Name" type="email" />
			<Field name="password" component={InputField} placeholder="First Name" type="password" />
			<Field name="passwordConfirmation" component={InputField} placeholder="First Name" type="password" />
			<Divider hidden />
			<Button type="submit" secondary disabled={submitting}>
				Register
			</Button>
		</form>
	);
};

RegisterForm = reduxForm({
	// a unique name for the form
	form: 'RegisterForm',
	validate
})(RegisterForm);

export default RegisterForm;
