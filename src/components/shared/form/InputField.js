import React from 'react';
import { Message, Input } from 'semantic-ui-react';

export const InputField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div className="field-wrap">
		<label>{label}</label>
		<div>
			<Input {...input} placeholder={label} width={16} type={type} />
			<div>
				{touched &&
					((error && <Message color="red">{error}</Message>) ||
						(warning && <Message color="red">{warning}</Message>))}
			</div>
		</div>
	</div>
);
