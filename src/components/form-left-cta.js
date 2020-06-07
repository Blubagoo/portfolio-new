import React from 'react';
import { Link } from 'react-router-dom';
import nodemailer from 'nodemailer';
import './styles/form-left-cta.css';

export default class FormLeftCTA extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the form left props', props);
		this.state = {
			userEmail: '',
			userName: '',
			userMessage: '',
		}
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log('submitting')
				// async..await is not allowed in global scope, must use a wrapper
				let em = this.state.userEmail;
		  let nm = this.state.userName;
		  let ms = this.state.userMessage;
		async function main() {
		  // Generate test SMTP service account from ethereal.email
		  // Only needed if you don't have a real mail account for testing

		  // create reusable transporter object using the default SMTP transport
		  let transporter = nodemailer.createTransport({
		    host: "smtp.ethereal.email",
		    port: 2525,
		    secure: false,
		    auth: {
		      user: 'jctisdale1988@gmail.com',
		      pass: 'eLacJcT5Y3B2Fp',
		    },
		  });
		  // send mail with defined transport object
		  

		  let info = await transporter.sendMail({
		    from: 'webdev@jim-tisdale.com', // sender address
		    to: `${em},webdev@jim-tisdale.com`, // list of receivers
		    subject: "Thanks for reaching out.", // Subject line
		    text: "Thank you for your submission I will reach out as soon as I can.", // plain text body
		    html: ms, // html body
		  });

		  console.log("Message sent: %s", info.messageId);
		  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

		  // Preview only available when sending through an Ethereal account
		  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
		  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		}

		main().catch(console.error);
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
	handleMessagechange(e) {
		console.log('messsage', e.currentTarget.value, this.state.userMessage);
		this.setState({
			userMessage: e.currentTarget.value,
		});
	}
	render() {
		return (
			<div className='form-left'>
				<div className='form-wrapper' id="cta-form">
					<h2>Contact Me</h2>
					<fieldset>
						<form onSubmit={this.handleSubmit.bind(this)}>
							<legend>
								<input type='text' id='cta-name' placeholder='Name' onChange={this.handleNameChange.bind(this)} />
								<input type='email' id='cta-email' placeholder='Email' onChange={this.handleEmailChange.bind(this)} />
								<textarea style={{rows: '5',}} defaultValue='Message' onChange={this.handleMessagechange.bind(this)} ></textarea>
								<button tyep='submit'>SUBMIT</button>
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