import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';

import './styles/header.css';

const LOGO = require('./images/rune-logo.jpg');

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
							<Link to="/" style={{color:config.colorPrimary}}>Home</Link>
						</div>
						<div className='nav-item'>
							<Link to="/projects" style={{color:config.colorPrimary}}>Projects</Link>
						</div>
						<div className='nav-item'>
							<Link to="/about" style={{color:config.colorPrimary}}>About</Link>
						</div>
					</div>
				</div>
				<div className='hr-bar'>

				</div>
			</div>
		)
	}
}