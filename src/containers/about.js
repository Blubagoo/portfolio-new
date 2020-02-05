import React from 'react';

export default class About extends React.Component {
	constructor( props ) {
		super(props);
		console.log('this is the About props', props);
	}
	render () {
		return (
			<div>
				<h1>This is the About page</h1>
			</div>
		)
	}
}