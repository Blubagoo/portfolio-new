import React from 'react';
import './styles/form-left-cta.css';

export default class FormLeftCTA extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the form left props', props);
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log('submitting')
	}
	render() {
		return (
			<div className='form-left'>
				<div className='form-wrapper'>
					<h2>Contact Me</h2>
					<fieldset>
						<form role='form' onSubmit={this.handleSubmit.bind(this)}>
							<legend>
								<input type='text' id='cta-name' placeholder='Name' />
								<input type='email' id='cta-email' placeholder='Email' />
								<textarea style={{rows: '5',}} >Message</textarea>
								<button>SUBMIT</button>
							</legend>
						</form>
					</fieldset>
				</div>
				<div className='cta-wrapper'>
					<h2>Got questions? Looking for a solution? Let's get in touch.</h2>
					<p>I currently am available for weekend work and possible extended part-time contract work</p>
					<div className='btns-wrapper'>
						<div className='btn-border'>
							<div className='btn'>
								<p>PROJECTS</p>
							</div>
						</div>
						<div className='btn-border'>
							<div className='btn'>
								<p>BIO</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}