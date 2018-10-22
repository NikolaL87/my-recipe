import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import LoginBackground from 'img/login-image.jpg';

class Login extends React.Component {
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
							<h2>Login</h2>
							<LoginForm onSubmit={this.handleSubmit} />
						</Grid.Column>
						<Grid.Column>
							<Image src={LoginBackground} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

export default Login;
