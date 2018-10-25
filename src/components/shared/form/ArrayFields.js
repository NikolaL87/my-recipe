import React from 'react'
import { Field, FieldArray } from 'redux-form';
import {Input, Button, Icon } from 'semantic-ui-react';

const renderField = ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <Input {...input} type={type} placeholder={label} />
      {touched &&
        error &&
        <span>
          {error}
        </span>}
    </div>
  </div>

const renderIngredients = ({ fields, meta: { error } }) =>
  <ul className="ingredient-items list-unstyled">
    <li className="ingredient-button">
      <Button 
        onClick={() => fields.push()}
        color={'teal'}  
      >
        Add Ingredients
      </Button>
    </li>
    {fields.map((ingredient, index) =>
      <li className="ingredient-item" key={index}>
        <Icon 
          name='window close'
          size="big" 
          onClick={() => fields.remove(index)}
        />
        <Field
          name={ingredient}
          type="text"
          component={renderField}
          label={`Ingredient ${index + 1}`}
        />
      </li>
    )}
    {error &&
      <li className="error">
        {error}
      </li>}
  </ul>

export const ArrayFields = () => {
  return (
      <FieldArray name="ingredients" component={renderIngredients} />
  )
}