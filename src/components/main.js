import React from 'react';
import Home from '../containers/home.js';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the Main props', props);
	}
	render () {
		return (
			<div>
				<Home />
			</div>
		)
	}
}