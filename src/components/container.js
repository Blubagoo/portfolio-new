import React from 'react';

import Header from './header';
import Main from './main';
import Footer from './footer';

import './styles/container.css';
import BG from '../components/images/polygon-texture-white.jpg';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the container props', props);
	}
	render() {
		console.log('rendering container');
		return (
			<div style={{backgroundImage: `url(${BG})`,}}>
				<Header />
				<Main />
				<Footer />
				<link href="https://fonts.googleapis.com/css?family=Patrick+Hand+SC|Rajdhani|Roboto|Waiting+for+the+Sunrise&display=swap" rel="stylesheet" />
			</div>
		);
	}
}