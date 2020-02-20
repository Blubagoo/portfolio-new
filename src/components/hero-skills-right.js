import React from 'react';
import config from './config';

import './styles/hero.css';

const image = require('./images/ring.png');

export default class HeroSkillsRight extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the hero skills props', props);
	}
	render() {
		return (
			<div className='hero-sk-rt'>
				<div className='intro-wrapper'>
					<h2 style={{color: config.colorPrimary}}>Unique. Creative. Resourceful.</h2>
					<p>I'm a developer who clearly likes to have some fun. This portfolio was designed based on a
					really great animated series "Kipo: Age of the Wonderbeasts". I was so inspired by the quality
					their work that I really wanted to recreate the funky high-energy vibe into my portfolio. I
					used various technologies to achieve this website such as React/Redux Node.js server to render
					the react server-side and serve parts of the site-wide data.</p>
				</div>
				<div className='graph-wrapper'>
					<img src={image} alt='icon-ring' />
				</div>
			</div>
		)
	}
}