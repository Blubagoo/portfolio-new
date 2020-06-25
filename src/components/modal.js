import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import { changeZIndex, setFirstPageLoad } from '../actions';

import './styles/modal.css';
export class Modal extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the modal props', props)
	}
	render () {
		let elClass = 'modal-hiding';
		if (this.props.isInView === 'scroll-showing' && this.props.firstTimeLoading === true) {
			console.log('inview first time')
			elClass = '';
			this.props.dispatch(setFirstPageLoad(false));
		} else if (this.props.isInView === 'scroll-showing' && this.props.firstTimeLoading === false){
			console.log('inview second time or more')
			elClass = ' modal-showing';
		} else if(this.props.isInView === 'scroll-hiding'){
			console.log('out of view')
			elClass = 'modal-hiding'
		}
		return (
			<div className='modal'>
				<div className='full-screen-modal' style={{zIndex: this.props.zIndex}}>
					<div className='display-wrapper'>
						<div className='img-wrapper'>
							<img src={this.props.project.projectImage} alt={this.props.project.projectName} />
						</div>
						<div className='info-wrapper'>
							<h3>{this.props.project.projectName}</h3>
							<p>{this.props.project.projectDescription}</p>
						</div>
						<div className='link-wrapper'>
							<a href={this.props.project.projectURL} rel='noopener noreferrer' target='_blank'>Website <i class="fas fa-long-arrow-alt-right"></i></a>
						</div>
					</div>
					<div className='close-wrapper' onClick={() => this.props.dispatch(changeZIndex(-99))}>
						<i className="far fa-times-circle"></i>
					</div>
				</div>
				<div className={'hint-wrapper ' + this.props.isInView}>
					<p>SCROLL DOWN</p>
				</div>
				<AnchorLink href='#header-top' className={'to-top-modal' + elClass}>
					<i className="fas fa-arrow-up"></i>
				</AnchorLink>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	zIndex: state.zIndex,
	project: state.project
})

export default connect (mapStateToProps)(Modal)