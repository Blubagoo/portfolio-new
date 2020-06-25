import React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Main from './main';
import Footer from './footer';
import Modal from './modal';

import './styles/container.css';
import BG from '../components/images/polygon-texture-white.jpg';

export class Container extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the container props', props);
	}
	render() {
		console.log('rendering container');
		return (
			<div style={{backgroundImage: `url(${BG})`,}}>
				<Header />
				<Main />
				<Footer />
				<Modal isInView={this.props.headerView}
					firstTimeLoad={this.props.firstTimeLoad}/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	headerView: state.headerView,
	firstTimeLoad: state.firstTimeLoad
})
export default connect (mapStateToProps)(Container);