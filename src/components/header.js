import React from 'react';
import config from './config';
import './styles/header.css';
const LOGO = require('./images/portfolio-logo-inverse.png');

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the header props', props);
	}
	render () {
		return (
			<div className='header' style={{backgroundColor: config.colorDark}}>
				<div className='head-wrapper'>
					<div className='img-wrapper'>
						<img src={LOGO} alt={config.name} />
					</div>
					<div className='nav-bar'>
						<div className='nav-item'>
							<p style={{color:config.colorPrimary}}>Home</p>
						</div>
						<div className='nav-item'>
							<p style={{color:config.colorPrimary}}>Projects</p>
						</div>
						<div className='nav-item'>
							<p style={{color:config.colorPrimary}}>About</p>
						</div>
					</div>
				</div>
				<div className='hr-bar'>

				</div>
			</div>
		)
	}
}