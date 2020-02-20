import React from 'react';
import { connect } from 'react-redux';

import HeroSkillsRight from '../components/hero-skills-right';
import Repeater from '../components/repeater';

import '../components/styles/about.css';


export class About extends React.Component {
	constructor( props ) {
		super(props);
		console.log('this is the About props', props);
		this.state = {
			experience: this.props.workExperience,
			education: this.props.education
		}
	}
	render () {
		return (
			<div className='about'>
				<HeroSkillsRight />
				<Repeater
					config={{style: 'two-halves', title: 'Experience'}}
					list={this.state.experience}
				/>
				<Repeater
					config={{style: 'row', title: 'Education',}}
					list={this.state.education}
				/>

			</div>
		)
	}
}

const mapStateToProps = state => ({
	education: state.education,
	workExperience: state.workExperience,
});

export default connect(mapStateToProps)(About);