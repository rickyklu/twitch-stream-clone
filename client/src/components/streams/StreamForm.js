import React from 'react';
import { Field, reduxForm } from 'redux-form';
// field is a compnent, reduxForm is a function

class StreamForm extends React.Component {
	constructor(props) {
		super(props);
		this.renderInput = this.renderInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className='header'>{error}</div>
				</div>
			)
		}
	}

	renderInput({ input, label, meta }) {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input
					{ ...input }
					autoComplete='off'
				/>
				{ this.renderError(meta) }
			</div>
		)
	}

	onSubmit(formValues) {
		this.props.onSubmit(formValues);
	}

	render() {
		return (
			<form
				className='ui form error'
				onSubmit={ this.props.handleSubmit(this.onSubmit) }
			>
				<Field
					name='title'
					component={ this.renderInput }
					label="Enter Title"
				/>
				<Field
					name='description'
					component={ this.renderInput }
					label="Enter description"
				/>
				<button className='ui button primary'>Submit</button>
			</form>
		)
	};
}

const validate = (formValues) => {
		// run if user didn not input title
		// return name of field input incorrectly and the name of error
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter title';
	}
	if (!formValues.title) {
		errors.description = 'You must enter description';
	}
	// otherwise return empty object, make redux think form is valid
	return errors
}

export default reduxForm({
	form: 'streamForm',
	validate: validate
})(StreamForm);

