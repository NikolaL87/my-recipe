import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class FileUploadField extends Component {
	constructor() {
		super();

		this.state = {
			images: []
		};

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

			// Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
			return axios
				.post('https://api.cloudinary.com/v1_1/vwphfplv/image/upload', formData, {
					headers: { 'X-Requested-With': 'XMLHttpRequest' }
				})
				.then(response => {
					const data = response.data;
					this.setState({ images: data });
					// const fileURL = data.secure_url; // You should store this URL for future references in your app
				});
		});

		// Once all the files are uploaded
		axios.all(uploaders).then(() => {
			// ... perform after upload is successful operation
		});
	};
	render() {
		const {
			label,
			meta: { touched, error },
			name
		} = this.props;
		let images = this.state.images.url;
		console.log('Cloud', images);
		return (
			<div className="form-group">
				<label>{label}</label>
				<div className="input-group">
					<Dropzone images={images} name={name} onDrop={this.handleDrop} multiple accept="image/*">
						<p>Drop your files or click here to upload</p>
					</Dropzone>
				</div>
				{touched && (error && <div className="alert alert-danger">{error}</div>)}
			</div>
		);
	}
}

export default FileUploadField;
