export const validate = values => {
	const errors = {};
	// Register Form Validation
	if (values.firstName && values.firstName.length < 4) {
		errors.firstName = 'Username min length is 4 character';
	}
	if (!values.email) {
		errors.email = 'Please enter email!';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	if (!values.passwordConfirmation) {
		errors.passwordConfirmation = 'Please enter password confirmation!';
	}
	if (values.password !== values.passwordConfirmation) {
		errors.password = 'Password must be the same!';
	}
	// Create My Recipe Form Validation
	if (!values.recipeTitle) {
		errors.recipeTitle = 'Insert recipe Title';
	}
	if (!values.recipeMainIngredient && !values.ingredients) {
		errors.recipeMainIngredient = 'Insert main ingredient or add some custom ingredients.';
	}
	// Use Up Leftovers Form Validation
	if (!values.leftOverOne) {
		errors.leftOverOne = 'Insert igredient';
	}
	return errors;
};
