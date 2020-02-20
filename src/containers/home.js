import React from 'react';

import ImageLeftIntro from '../components/image-left-intro';
import ThreeBoxSectionDivider from '../components/three-box-section-divider';
import EightContentBubbles from '../components/eight-content-bubbles';
import FormLeftCTA from '../components/form-left-cta'

import '../components/styles/home.css';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the home props', props);
	}
	render () {
		return (
			<div className='home'>
				<div className='first-section'>
					<ImageLeftIntro />
				</div>
				<div className='colorDark-bg'>
					<ThreeBoxSectionDivider />
					<EightContentBubbles />
				</div>
				<FormLeftCTA />
				<script src="https://kit.fontawesome.com/c9e531061a.js" crossOrigin="anonymous"></script>
			</div>
		)
	}
}