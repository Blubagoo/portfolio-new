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
					<a href="https://github.com/Blubagoo/portfolio-new"><p>Portfolio ( Isomorphic )</p></a>
					<a href="https://github.com/Blubagoo/react-portfolio"><p>Portfolio ( Older )</p></a>
				</div>
				<div className='bubble'>
					<h3>Node.js</h3>
					<a href='https://github.com/Blubagoo/FlowState/tree/master/server'><p>FlowState ( ServerSide )</p></a>
					<a href="https://github.com/Blubagoo/information-server"><p>Portfolio Server</p></a>
					<a href="https://github.com/Blubagoo/ad-rotator/blob/master/server.js"><p>Ad Rotator</p></a>
				</div>
				<div className='bubble'>
					<h3>Mongoose ( NoSQL )</h3>
					<a href="https://github.com/Blubagoo/FlowState/tree/master/server/api/resources"><p>FlowState ( Schema )</p></a>
					<a href="https://github.com/Blubagoo/information-server/tree/master/api/resources"><p>Portfolio Server</p></a>
				</div>
				<div className='bubble'>
					<h3>iOS/Android Solutions</h3>
					<a href='https://github.com/Blubagoo/WP-Express'><p>WP Native Mobile Design</p></a>
					<a href='https://github.com/Blubagoo/customer-connect'><p>Customer Connect</p></a>
				</div>
			</div>
		);
	}
}