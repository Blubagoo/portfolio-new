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
						<img src={this.props.project.projectImage} alt={this.props.project.projectName} />
					</div>
					<div className='info-wrapper'>
						<h3>{this.props.project.projectName}</h3>
						<p>{this.props.project.projectDescription}</p>
					</div>
					<div className='link-wrapper'>
						<a href="" rel='no-referrer no-follow' target='_blank'>Website</a>
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
})

export default connect (mapStateToProps)(Modal)