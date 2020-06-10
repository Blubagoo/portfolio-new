import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import { changeZIndex } from '../actions';

import './styles/modal.css';

export const Modal = (props) => {
	console.log('modal props', props)
	return (
		<div className='modal'>
			<div className='full-screen-modal' style={{zIndex: props.zIndex}}>
				<div className='display-wrapper'>
					<div className='img-wrapper'>
						<img src={props.project.projectImage} alt={props.project.projectName} />
					</div>
					<div className='info-wrapper'>
						<h3>{props.project.projectName}</h3>
						<p>{props.project.projectDescription}</p>
					</div>
					<div className='link-wrapper'>
						<a href={props.project.projectURL} rel='noopener noreferrer' target='_blank'>Website <i class="fas fa-long-arrow-alt-right"></i></a>
					</div>
				</div>
				<div className='close-wrapper' onClick={() => props.dispatch(changeZIndex(-99))}>
					<i className="far fa-times-circle"></i>
				</div>
			</div>
			<AnchorLink href='#header-top' className='to-top-modal'>
				<i className="fas fa-arrow-up"></i>
			</AnchorLink>
		</div>
	); 
}
const mapStateToProps = (state) => ({
	zIndex: state.zIndex,
	project: state.project
})

export default connect (mapStateToProps)(Modal)