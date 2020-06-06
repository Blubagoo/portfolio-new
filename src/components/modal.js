import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import { changeZIndex } from '../actions';

import './styles/modal.css';

export const Modal = (props) => {
	console.log('modal props', props)

	return (
		<AnchorLink href='#header-top' className='modal'>
			<div className='full-screen-modal' style={{zIndex: props.zIndex}}>
				<div className='display-wrapper'>
					<div className='img-wrapper'>

					</div>
				</div>
				<div class='close-wrapper' onClick={() => props.dispatch(changeZIndex(-99))}>
					<i class="far fa-times-circle"></i>
				</div>
			</div>
			<div className='to-top-modal'>
				<i className="fas fa-arrow-up"></i>
			</div>
		</AnchorLink>
	); 
}
const mapStateToProps = (state) => ({
	zIndex: state.zIndex,
})

export default connect (mapStateToProps)(Modal)