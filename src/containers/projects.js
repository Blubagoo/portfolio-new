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
	}
	componentDidMount() {
		this.sortMachine();
	}
	sortMachine = async () => {
		console.log('mounted');
		let workArr = [];
		let homeArr = []; 
		let sort = await this.props.projects.map(each=> {
			console.log('each', each)
			if(each.projectType === 'work') {
				console.log('each if', each)
				workArr.push(each);
				return this.setState((state, props) => {
  				return Object.assign({}, state, {
  					workArray: workArr
  				});
				})
			} else {
				console.log('each else', each)
			 	homeArr.push(each);
				return this.setState((state, props) => {
  				return Object.assign({}, state, {
  					homeArray: homeArr
  				});
				})
			};
		});
	}
	render() {
		return (
			<div className='project-wrapper'>
				<h1>Dive right in.</h1>
				<p>This is a look at some of the projects I have been responsible for either the majority or all of the development.</p>
				<DisplayBox config={this.state.workArray}
					title={'Work Projects'}
					filterBy={'work'} />
				<DisplayBox config={this.state.homeArray}
					title={'Home Projects'}
					filterBy={'home'} />
			</div>
		)
	}
}

export default connect()(Projects);