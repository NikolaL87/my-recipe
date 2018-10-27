import React from 'react';
import { Field } from 'redux-form';
import { Input, Divider, Icon } from 'semantic-ui-react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div className="ingredient-field">
		<label>{label}</label>
		<div>
			<Input {...input} type={type} placeholder={label} />
			{touched && error && <span>{error}</span>}
		</div>
	</div>
);

export const renderIngredients = ({ fields, meta: { error } }) => (
	<ul className="ingredient-items list-unstyled">
		<li className="ingredient-button">
			<span className="ui teal button" onClick={() => fields.push()} color={'teal'}>
				Add Ingredients +
			</span>
		</li>
		<Divider hidden />
		{fields.map((ingredient, index) => (
			<li className="ingredient-item" key={index}>
				<Icon name="window close" size="big" onClick={() => fields.remove(index)} />
				<Field
					name={`${ingredient}.quantity`}
					type="text"
					component={renderField}
					label={`Quantity ${index + 1}`}
				/>
				<Field
					name={`${ingredient}.measure`}
					type="text"
					component={renderField}
					label={`Measure ${index + 1}`}
				/>
				<Field name={`${ingredient}.item`} type="text" component={renderField} label={`Item ${index + 1}`} />
				<Field
					name={`${ingredient}.prepNotes`}
					type="text"
					component={renderField}
					label={`Prep notes ${index + 1}`}
				/>
			</li>
		))}
		{error && <li className="error">{error}</li>}
	</ul>
);
