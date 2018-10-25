import React from 'react';
import { Message, TextArea } from 'semantic-ui-react';

export const TextAreaField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div className="field-wrap">
		<label>{label}</label>
		<div>
			<TextArea {...input} placeholder={label} width={16} type={type} />
			<div>
				{touched &&
					((error && <Message color="red">{error}</Message>) ||
						(warning && <Message color="red">{warning}</Message>))}
			</div>
		</div>
	</div>
);
