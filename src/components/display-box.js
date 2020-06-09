import React from 'react';

import { connect } from 'react-redux';
import { changeZIndex } from '../actions';

import './styles/display-box.css';

export class DisplayBox extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the display box props', this.props);
	}

	renderModal (project, ind) {
		console.log('rendering a modal for project, ', project);
		this.props.dispatch(changeZIndex(10));
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
					<div className='single-box' key={index} onClick={() => this.renderModal(obj, index)}>
						<div className='img-wrapper'>
							<img src={image} alt={name} />
						</div>
						<h2>{name}</h2>
					</div>
				);
			default: 
				return;
		}
	}
	render() { 
		return (
			<div className='display-box-wrapper'>
				<h1>{this.props.title}</h1>
				<div className='grad-hr' />
				<div className='display-box'>
					<div className='selection-wrapper'>
						{this.projects.config.map((each,index) => this.renderBox(each,index))}
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = state => ({

})
export default connect (mapStateToProps)(DisplayBox);






// <div className='render-wrapper'>
// 	<div className='title'>
// 		<a href={this.state.projectURL} target='_blank' rel="noopener noreferrer" style={{color: config.colorPrimary}}>
// 			<h2>{this.state.projectName}</h2>
// 		</a>
// 	</div>
// 	<div className='description'>
// 		<p>{this.state.projectDescription}</p>
// 	</div>
// </div>