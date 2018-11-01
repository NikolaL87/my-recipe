import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Container } from 'semantic-ui-react';
import RegisterForm from './RegisterForm';
import RegisterBackground from 'img/register-image.jpg';
import {connect} from 'react-redux';
import * as actions from '../../actions/authActions';

class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }

  onChange(e) {
    this.setState({[e.target.value]: e.target.value})
  }

	handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.dispatch(actions.registerUser(newUser))
	};
	render() {
    const { errors } = this.state;
		return (
			<Container>
				<Grid>
					<Grid.Row>
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<h2>Register</h2>
							<RegisterForm errors={errors} onSubmit={this.handleSubmit} />
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
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Register);
