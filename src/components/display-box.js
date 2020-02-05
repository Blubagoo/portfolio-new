import React from 'react';

export default class DisplayBox extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the display box props', props);
	}
	renderBox(obj) {
		let name = 'John Doe';
		let image = 'https://www.fsm-media.com/wp-content/uploads/2019/12/unnamed-2.png';
		
		if(obj.name) {
			name = obj.name;
		} else if (obj.image) {
			image = obj.image;;
		}
		return (
			<div className='display-box'>
				<img src={image} alt={name} />
				<div className='display-overlay'>
					<p>{name}</p>
				</div>
			</div>
		);
	}
	render () {
		let projects = [];
		if (!this.props.projects) {
			projects = [{},{},{},{}];
		} else {
			projects = this.props.projects
		}
		return (
			<div>
				<h1>{this.props.title}</h1>
				{projects.map(each => this.renderBox(each))}
			</div>
		)
	}
}