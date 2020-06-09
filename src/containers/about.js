import React from 'react';

import { connect } from 'react-redux';

import HeroSkillsRight from '../components/hero-skills-right';
import Repeater from '../components/repeater';

import '../components/styles/about.css';


export class About extends React.Component {
	constructor( props ) {
		super(props);
		console.log('this is the About props', props);
		
	}
	render () {
		return (
			<div className='about'>
				<HeroSkillsRight />
				<Repeater
					config={{style: 'row', title: 'Experience'}}
					list={this.props.workExperience}
				/>
				<Repeater
					config={{style: 'row', title: 'Education',}}
					list={this.props.education}
				/>
			</div>
		)
	}
}

export default connect()(About);