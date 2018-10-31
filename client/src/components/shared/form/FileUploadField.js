import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { Message } from 'semantic-ui-react';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

class FileUploadField extends Component {
	constructor() {
		super();

		this.handleDrop = this.handleDrop.bind(this);
	}

	handleDrop = files => {
		// Push all the axios request promise into a single array

		const uploaders = files.map(file => {
			// Initial FormData
			const formData = new FormData();
			formData.append('file', file);
			formData.append('tags', `codeinfuse, medium, gist`);
			formData.append('upload_preset', 'vwphfplv'); // Replace the preset name with your own
			formData.append('api_key', '837342766361987'); // Replace API key with your own Cloudinary key
			formData.append('timestamp', (Date.now() / 1000) | 0);
			this.props.dispatch(actions.postFileUploadData(formData));
		});

		// Once all the files are uploaded
		axios.all(uploaders).then(() => {});
	};

	componentWillUnmount() {
		this.props.dispatch(actions.postFileUploadInit());
	}

	render() {
		const {
			label,
			meta: { touched, error, warning }
		} = this.props;
		const { url } = this.props.file;
		return (
			<div className="form-group">
				<label>{label}</label>
				<div className="input-group">
					<Dropzone
						className="drop-zone"
						name="recipeImage"
						onDrop={this.handleDrop}
						multiple
						accept=".jpeg,.png"
					>
						{url ? (
							<img src={url} alt="" />
						) : (
							<p className="drop-text">Drop your files or click here to upload</p>
						)}
					</Dropzone>
				</div>
				{touched &&
					((error && <Message color="red">{error}</Message>) ||
						(warning && <Message color="red">{warning}</Message>))}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		file: state.file.data
	};
}

export default connect(mapStateToProps)(FileUploadField);
