import React from 'react';
import { Message, Input } from 'semantic-ui-react';

export const InputField = ({ input, value, onChange, label, type, name, error, placeholder }) => (
	<div className="field-wrap">
		<label>{label}</label>
		<div>
			<Input
				{...input}
				value={value}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				width={16}
				type={type}
			/>
			<div>{error && <Message color="red">{error}</Message>}</div>
		</div>
	</div>
);
