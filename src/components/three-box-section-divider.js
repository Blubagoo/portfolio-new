import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

import './styles/three-box-section.css';

export default class ThreeBoxSectionDivider extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the home props', props);
	}
	render () {
		return (
			<div className='three-box-section'>
				<div className='box'>
					<div className='icon'>
						<FontAwesomeIcon icon={faDesktop} />
					</div>
					<div className='info-wrapper'>
						<h2>Front-End</h2>
						<p>HTML, CSS, JS, jQuery, React w/Redux, React-Native, Wordpress, Consuming API's</p>
					</div>
				</div>
				<div className='box'>
					<div className='icon'>
						<FontAwesomeIcon icon={faServer} />
					</div>
					<div className='info-wrapper'>
						<h2>Back-End</h2>
						<p>Node.js,Exress, Server-Side React, MongoDB, Mongoose, Creating REST API's</p>
					</div>
				</div>
				<div className='box'>
					<div className='icon'>
						<FontAwesomeIcon icon={faNetworkWired} />
					</div>
					<div className='info-wrapper'>
						<h2>Sys-Admin</h2>
						<p>Migration, Hosting, Maintanence, Optimization</p>
					</div>
				</div>
			</div>
		)
	}
}