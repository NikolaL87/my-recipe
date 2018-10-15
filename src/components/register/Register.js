import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import RegisterForm from './RegisterForm';
import RegisterBackground from 'img/register-image.jpg';

class Register extends React.Component {
	handleSubmit = values => {
		// print the form values to the console
		console.log(values);
	};
	render() {
		return (
			<React.Fragment>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column>
							<h2>Register</h2>
							<RegisterForm onSubmit={this.handleSubmit} />
						</Grid.Column>
						<Grid.Column>
							<Image src={RegisterBackground} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</React.Fragment>
		);
	}
}

export default Register;
