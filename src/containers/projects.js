import React from 'react';
import DisplayBox from '../components/display-box';
import { connect } from 'react-redux'


export class Projects extends React.Component {
	constructor( props ) {
		super(props);
		console.log('this is the Projects props', props);
		this.state = {
			projects: this.props.projects,
		}
	}
	render () {
		
		return (
			<div>
				<DisplayBox config={this.state.projects}
					title={'Work Projects'}
					filterBy={'work'} />
					<DisplayBox config={this.state.projects}
					title={'Home Projects'}
					filterBy={'home'} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	projects: state.projects
});

export default connect(mapStateToProps)(Projects);