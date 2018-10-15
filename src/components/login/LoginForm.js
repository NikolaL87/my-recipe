import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Divider } from 'semantic-ui-react';
import { InputField } from '../shared/form/InputField';

let LoginForm = props => {
	const { handleSubmit, submitting } = props;
	return (
		<form onSubmit={handleSubmit}>
			<Field name="email" component={InputField} placeholder="First Name" type="email" />
			<Field name="password" component={InputField} placeholder="First Name" type="password" />
			<Divider hidden />
			<Button type="submit" secondary disabled={submitting}>
				Login
			</Button>
		</form>
	);
};

LoginForm = reduxForm({
	// a unique name for the form
	form: 'LoginForm'
})(LoginForm);

export default LoginForm;
