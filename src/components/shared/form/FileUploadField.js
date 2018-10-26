import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';

export class FileUploadField extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const {input: {onChange}} = this.props;
    console.log(onChange)

    onChange('https://photos.bigoven.com/recipe/hero/frappe-mocha.jpg?h=500&w=500');
  }

  render(){
    const {label, meta: {touched, error}} = this.props;
    return (
      <div className="form-group">
        <label>{label}</label>
        <div className="input-group">
          <Input 
            type='file'
            accept='.jpg, .png, .jpeg'
            onChange={this.onChange}
          />
        </div>
          {touched &&
            ((error && <div className="alert alert-danger">{error}</div>))}
      </div>
    )
  }
}
