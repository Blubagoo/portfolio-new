import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/form-left-cta.css';

export default class FormLeftCTA extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the form left props', props);
		this.state = {
			userEmail: '',
			userName: '',
			userMessage: '',
			isSending: false,
			submitText: 'Submit',
			formTitle: 'Contact Jim'
		}
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		console.log('submitting')
		let em = this.state.userEmail;
		let nm = this.state.userName;
		let ms = this.state.userMessage;
		await this.setState((state, props) => ({
			isSending: true
		}));
		this.handleSubmitText();
		let request = await axios.post('https://jim-server.herokuapp.com/api/nodemail/newMail', {
			name: nm,
			email: em,
			message: ms
		})
			.then(async (data) => {
				console.log("async then")
				await this.setState((state, props) => ({
					isSending: false,
					submitText: 'Submit',
					userEmail: '',
					userMessage: '',
					userName: '',
					formTitle: 'Thank You!'
				}));
				await console.log('after async set state', this.state)
				await this.handleSubmitText();
			})
			.catch(err => console.log("error after mail", err))
				console.log('props', this.state.isSending);
		
	}
	handleNameChange(e) {
		console.log('name', e.currentTarget.value);
		this.setState({
			userName: e.currentTarget.value,
		});
	}
	handleEmailChange(e) {
		console.log('email', e.currentTarget.value);
		this.setState({
			userEmail: e.currentTarget.value,
		});
	}
	handleMessageChange(e) {
		let value = e.currentTarget.value;
		console.log('message', value);
		this.setState((state, props) => {
			return Object.assign({}, state, {
				userMessage: value,
			});
		});

	}
	handleSubmitText() {
		let interv;
		if(this.state.isSending) {
			console.log('inside if isSending')
			this.setState((state, props) => ({
				submitText: 'Sending'
			}));
		} else {
			clearInterval(interv);
			setTimeout(() => {
				this.setState((state, props) => ({
					submitText: 'Submit',
					formTitle: 'Contact Jim'
				}));
			}, 2000);
			return this.setState((state, props) => ({
				submitText: 'Sent'
			}));
		}
	}
	render() {
		return (
			<div className='form-left'>
				<div className='form-wrapper' id="cta-form">
					<h2>{this.state.formTitle}</h2>
					<fieldset>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<legend>
								<input type='text' id='cta-name' placeholder='Name' onChange={this.handleNameChange.bind(this)} value={this.state.userName}/>
								<input type='email' id='cta-email' placeholder='Email' onChange={this.handleEmailChange.bind(this)}  value={this.state.userEmail}/>
								<textarea style={{rows: '5',}} placeholder='Message' onChange={this.handleMessageChange.bind(this)}  value={this.state.userMessage}>{this.state.userMessage}</textarea>
								<div className='form-btn-wrapper'>
									<button type='submit' className='btn'>{this.state.submitText}</button>
								</div>
							</legend>
						</form>
					</fieldset>
				</div>
				<div className='cta-wrapper'>
					<h2>Full-Stack Developer at your service.</h2>
					<p>I am currently seeking full-stack development opportunities and am eager to see what company is going to help take me to the next level.</p>
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