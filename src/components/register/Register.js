import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import RegisterForm from './RegisterForm';
import RegisterBackground from 'img/register-image.jpg';

class Register extends React.Component {
	handleSubmit = values => {
		// print the form values to the console
		console.log(values);
	};
	render() {
		return (
			<Container>
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
			</Container>
		);
	}
}

export default Register;
