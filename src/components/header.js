import React from 'react';
import config from './config';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './styles/header.css';

const LOGO = require('./images/rune-vapor-wave-logo-square-transparent.png');
const headerBG = require('./images/header-bg.png');

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the header props', props);
		this.state = {
			iconClass: 'icon-showing',
			menuClass: 'icon-hiding collapsed'
		}
	}
	handleClick() {
		if (window.location.pathname !== '/') {
			window.location = '/#cta-form';
		}
	}
	handleMobileMenu = async (icon,menu) => {
		console.log('inside handle mobile before');
		this.setState((state,props) => {
			return Object.assign({}, state,{
				iconClass: icon,
				menuClass: menu
			})
		})
		console.log('inside handle mobile after', this.state);
	}
	render () {
		return (
			<div className='header' id='header-top' style={{backgroundColor: config.colorDark,backgroundImage: `url(${headerBG})`}}>
				<div className='head-wrapper lg-screen' style={{}}>
					<div className='slide-left'>
						<Link to='/' className='img-wrapper'>
							<img src={LOGO} alt={config.name} />
						</Link>
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
					<div className='cta'>
						<AnchorLink href='#cta-form'>
							<div className="form-btn" onClick={this.handleClick.bind(this)}>
								<p>LET'S CONNECT</p>
							</div>
						</AnchorLink>
					</div>
				</div>
				<div className='head-wrapper sm-screen'>
					<Link to='/' className='img-wrapper'>
						<img src={LOGO} alt={config.name} />
					</Link>
					<div className='hamburger-menu'>
						<div className='ham-icon'  onClick={() => {
							this.handleMobileMenu('icon-hiding', 'icon-showing expanded')
						}}>
							<i className={`fas fa-bars ${this.state.iconClass}`}></i>
						</div>
						<div className={`mobile-menu ${this.state.menuClass}`}>
						  <div className={`close-icon ${this.state.menuClass}`}  onClick={() => {
						  	console.log('onclick close')
								this.handleMobileMenu('icon-showing', 'icon-hiding collapsed')
							}}>
								<i className="far fa-times-circle"></i>
							</div>
							<Link to="/" className={`nav-item ${this.state.menuClass}`}>
								<p style={{color:config.colorPrimary}}>Home</p>
							</Link>
							<Link to='/projects' className={`nav-item ${this.state.menuClass}`}>
								<p style={{color:config.colorPrimary}}>Projects</p>
							</Link>
							<Link to='/about' className={`nav-item ${this.state.menuClass}`}>
								<p style={{color:config.colorPrimary}}>Bio</p>
							</Link>
						</div>
					</div>
				</div>
				<div className='hr-bar'>

				</div>
			</div>
		)
	}
}