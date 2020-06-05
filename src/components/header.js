import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './styles/header.css';

const LOGO = require('./images/rune-vapor-wave-logo-square-transparent.png');

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the header props', props);
	}
	render () {
		return (
			<div className='header' style={{backgroundColor: config.colorDark}}>
				<div className='head-wrapper'>
					<div className='slide-left'>
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
								<Link to="/about" style={{color:config.colorPrimary}}>Bio</Link>
							</div>
						</div>
					</div>
					<div class='cta'>
						<AnchorLink href='#cta-form'>
							<div class="form-btn" >
								<p>LET'S CONNECT</p>
							</div>
						</AnchorLink>
					</div>
				</div>
				<div className='hr-bar'>

				</div>
			</div>
		)
	}
}