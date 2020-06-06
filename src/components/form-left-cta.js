import React from 'react';
import { Link } from 'react-router-dom';
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
				<div className='form-wrapper' id="cta-form">
					<h2>Contact Me</h2>
					<fieldset>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<legend>
								<input type='text' id='cta-name' placeholder='Name' />
								<input type='email' id='cta-email' placeholder='Email' />
								<textarea style={{rows: '5',}} defaultValue='Message'></textarea>
								<button tyep='submit'>SUBMIT</button>
							</legend>
						</form>
					</fieldset>
				</div>
				<div className='cta-wrapper'>
					<h2>Got questions? Looking for a solution? Let's get in touch.</h2>
					<p>I currently am available for weekend work and possible extended part-time contract work</p>
					<div className='btns-wrapper'>
						<Link to="/projects">
							<div className='btn'>
								<p>PROJECTS</p>
							</div>
						</Link>
						<Link to="/about">
							<div className='btn'>
								<p>BIO</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}