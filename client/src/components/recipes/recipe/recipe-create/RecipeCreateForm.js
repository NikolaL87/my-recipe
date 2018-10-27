import React from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Button, Divider } from 'semantic-ui-react';
import { InputField } from '../../../shared/form/InputField';
import { TextAreaField } from '../../../shared/form/TextAreaField';
import { renderIngredients } from '../../../shared/form/ArrayFields';
import { SelectField } from '../../../shared/form/SelectField';
import { FileUploadField } from '../../../shared/form/FileUploadField';
import { validate } from '../../../shared/form/Validators';

let RecipeCreateForm = props => {
	const { handleSubmit, submitting, submitCb, options } = props;
	return (
		<form onSubmit={handleSubmit(submitCb)}>
			<Field name="recipeTitle" component={InputField} placeholder="Title" type="text" label={'Title'} />
			<Field
				name="recipeDescription"
				component={TextAreaField}
				placeholder="Description"
				type="textarea"
				label={'Description'}
			/>
			<Field name="recipeSource" component={InputField} placeholder="Source" type="text" label={'Source'} />
			<Field
				name="recipeMainIngredient"
				component={InputField}
				placeholder="Main Ingredient"
				type="text"
				label={'Main Ingredient'}
			/>
			<Divider hidden />
			<Field
				options={options}
				name="recipeCategory"
				label="Category"
				component={SelectField}
				placeholder="Select category"
			/>
			<FieldArray name="ingredients" component={renderIngredients} />
			<Field
				name="recipePreparation"
				component={TextAreaField}
				placeholder="Preparation"
				type="textarea"
				label={'Preparation'}
			/>
			<Field
				name="recipeNotes"
				component={TextAreaField}
				placeholder="Write your notes"
				type="textarea"
				label={'Write your notes'}
			/>
			<Divider hidden />
			<Field name="recipeImage" label="Recipe Image" component={FileUploadField} />
			<Divider hidden />
			<Button type="submit" secondary disabled={submitting}>
				Save your recipe
			</Button>
			<Divider hidden />
		</form>
	);
};

RecipeCreateForm = reduxForm({
	// a unique name for the form
	form: 'RecipeCreateForm',
	validate
})(RecipeCreateForm);

export default RecipeCreateForm;
