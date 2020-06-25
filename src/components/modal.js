import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import { changeZIndex, setFirstPageLoad } from '../actions';

import './styles/modal.css';
export class Modal extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the modal props', props)
		this.state = {
			elClass: this.renderTopModal(this.props.isInView),
		}
	}
	renderTopModal(elClass) {
		console.log('before if renderTopModal');
		if (this.props.firstTimeLoad !== true && elClass === ' scroll-showing') {
			console.log('coming back to view second time')
			return ' modal-hiding';
		} else if (elClass === ' scroll-hiding') {
			console.log('leaving view')
			return ' modal-showing';
		} else {
			return '';
		}
	}
	render () {
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
							<a href={this.props.project.projectURL} rel='noopener noreferrer' target='_blank'>Website <i className="fas fa-long-arrow-alt-right"></i></a>
						</div>
					</div>
					<div className='close-wrapper' onClick={() => this.props.dispatch(changeZIndex(-99))}>
						<i className="far fa-times-circle"></i>
					</div>
				</div>
				<div className={'hint-wrapper ' + this.props.isInView}>
					<p>SCROLL DOWN</p>
				</div>
				<AnchorLink href='#header-top' className={'to-top-modal' + this.renderTopModal(this.props.isInView)}>
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