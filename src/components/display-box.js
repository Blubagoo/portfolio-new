import React from 'react';
import config from './config';

import './styles/display-box.css';

export default class DisplayBox extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the display box props', this.props);
		this.state = {
			projectName: this.props.config[0].projectName || '',
			projectDescription: this.props.config[0].projectDescription || '',
			projectImage: this.props.config[0].projectImage || '',
			projectURL: this.props.config[0].projectURL || '',
			projects: this.props.config,
		};
	}
	handleInfo(e) {
		console.log('changing projects',e.currentTarget.id);
		let id = parseInt(e.currentTarget.id.split('project-')[1]);
		console.log('after id', id, this.props.config)
		let object = this.state.projects[id];
		console.log('after object', object)
		this.setState((state, props) => {
			return Object.assign({}, state,{
				projectName: object.projectName,
				projectDescription: object.projectDescription,
				projectImage: object.projectImage,
				projectURL: object.projectURL,
				projectType: 'work',
			})
		})
	}
	renderBox(obj,index) {
		let name = '';
		let image = '';
		if(obj.projectName) {
			name = obj.projectName;
		} 
		if (obj.projectImage) {
			image = obj.projectImage;
		}
		switch(obj.projectType) {
			case this.props.filterBy:
				return (
					<div className='single-box' key={index}>
						<div className='img-wrapper'>
							<img src={image} alt={name} />
						</div>
						<div className='display-overlay' id={`project-${index}`} onClick={this.handleInfo.bind(this)}>
							<p>{name}</p>
						</div>
					</div>
				);
			default: 
				return;
		}
	}
	render () { 
		return (
			<div className='display-box-wrapper'>
				<h1 style={{borderBottom: `3px solid ${config.colorPrimary}`}}>{this.props.title}</h1>
				<div className='display-box'>
					<div className='selection-wrapper'>
						{this.state.projects.map((each,index) => this.renderBox(each,index))}
					</div>
					<div className='render-wrapper'>
						<div className='title'>
							<a href={this.state.projectURL} target='_blank' rel="noopener noreferrer" style={{color: config.colorPrimary}}> <h2>{this.state.projectName}</h2></a>
						</div>
						<div className='description'>
							<p>{this.state.projectDescription}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}