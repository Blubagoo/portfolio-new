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