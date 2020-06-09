import React from 'react';
import DisplayBox from '../components/display-box';
import { connect } from 'react-redux';
import '../components/styles/projects.css';


export class Projects extends React.Component {
	constructor( props ) {
		super(props);
		console.log('this is the Projects props', props);
		this.state = {
			workArray: [],
			homeArray: [],
		}
		this.sortMachine();

	}
	sortMachine = async () => {
		console.log('mounted');
		let workArray = [];
		let homeArray = []; 
		let sort = await this.props.projects.map(each=> {
			console.log('each', each)
			if(each.projectType === 'work') {
				console.log('each if', each)
				workArray.push(each);
				return this.setState((state, props) => {
  				return Object.assign({}, state, {
  					workArray
  				});
				})
			} else {
				console.log('each else', each)
			 	homeArray.push(each);
				return this.setState((state, props) => {
  				return Object.assign({}, state, {
  					homeArray
  				});
				})
			};
		});
		console.log('sort', workArray, homeArray)
	}
	render() {
		return (
			<div className='project-wrapper'>
				<DisplayBox config={this.props.workArray}
					title={'Work Projects'}
					filterBy={'work'} />
				<DisplayBox config={this.props.homeArray}
					title={'Home Projects'}
					filterBy={'home'} />
			</div>
		)
	}
}

export default connect()(Projects);