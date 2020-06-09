import React from 'react';

import Header from './header';
import Main from './main';
import Footer from './footer';
import Modal from './modal';

import './styles/container.css';
import BG from '../components/images/polygon-texture-white.jpg';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the container props', props);
		this.state = {
			project: {},
		}
	}
	render() {
		console.log('rendering container');
		return (
			<div style={{backgroundImage: `url(${BG})`,}}>
				<Header />
				<Main />
				<Footer />
				<Modal project={this.state.project} />
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	project: state.project
})
export default connect(mapStateToProps)(Container);