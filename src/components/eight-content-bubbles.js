import React from 'react';
import './styles/eight-content-bubbles.css'

export default class EightContentBubbles extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the eight content bubbles props', props);
	}
	render() {
		return (
			<div className='eight-bubbles'>
				<div className='bubble'>
					<h3>React.js w/Redux</h3>
					<a href="https://github.com/Blubagoo/portfolio-new"><p>Portfolio( Isomorphic )</p></a>
					<a href="https://github.com/Blubagoo/react-portfolio"><p>Portfolio( Older )</p></a>
				</div>
				<div className='bubble'>
					<h3>REST API</h3>
					<a href='https://github.com/Blubagoo/FlowState/tree/master/server'><p>FlowState</p></a>
				</div>
				<div className='bubble'>
					<h3>Custom Software Solutions</h3>
					<p>Syndicate multiple systems together and increase workplace efficiency through 
					better system integration</p>
				</div>
				<div className='bubble'>
					<h3>iOS/Android Solutions</h3>
					<p>You've been thinking of the perfect app for weeks and are now ready to put that idea in
					your hand</p>
				</div>
				<div className='bubble'>
					<h3>WP Mobile Extension</h3>
					<p>Build a mobile app without knowing how to develop on mobile. 
					This solution offers the ability to design pages on WordPress for your mobile app.</p>
				</div>
				<div className='bubble'>
					<h3>Salesforce & WP Integration</h3>
					<p>Integrate vital salesforce data with any platform or website seamlessly.</p>
				</div>
				<div className='bubble'>
					<h3>SEO</h3>
					<p>Optimize your website searchability with the latest SEO strategies.</p>
				</div>
				<div className='bubble'>
					<h3>Contractor Dispatch Software</h3>
					<p>The perfect solution for a small business. Integrate your contractor with your system 
					directly. Go digital and monetize that valuable data.</p>
				</div>
			</div>
		);
	}
}