import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Divider, Card, Grid, Image } from 'semantic-ui-react';
import { InputField } from '../../../shared/form/InputField';
import { validate } from '../../../shared/form/Validators';

let RecipeLeftoversForm = props => {
	const { handleSubmit, submitting, submitCb } = props;
	return (
		<form onSubmit={handleSubmit(submitCb)}>
      <Grid columns='three' divided>
        <Grid.Row>
          <Grid.Column>
            <h2>1st Ingredient</h2>
            <Card>
              <Image src={'http://mda.bigoven.com/assets/images/emails/left_overs/egg_basket.jpg'} />
              <Card.Content>
                <Field name="leftOverOne" component={InputField} placeholder="1st Ingredient" type="text" label={'1st Ingredient'} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <h2>2nd Ingredient</h2>
            <Card>
              <Image src={'http://mda.bigoven.com/assets/images/emails/left_overs/tomatoes.jpg'} />
              <Card.Content>
                <Field name="leftOverTwo" component={InputField} placeholder="2nd Ingredient" type="text" label={'2nd Ingredient'} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <h2>3rd Ingredient</h2>
            <Card>
              <Image src={'http://mda.bigoven.com/assets/images/emails/left_overs/basil.jpg'} />
              <Card.Content>
                <Field name="leftOverThree" component={InputField} placeholder="3rd Ingredient" type="text" label={'3rd Ingredient'} />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
			<Divider hidden />
			<Button type="submit" secondary disabled={submitting}>
				Search Recipe 
			</Button>
			<Divider hidden />
		</form>
	);
};

RecipeLeftoversForm = reduxForm({
	// a unique name for the form
  form: 'RecipeLeftoversForm',
  validate
})(RecipeLeftoversForm);

export default RecipeLeftoversForm;
