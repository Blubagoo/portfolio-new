import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'

import Home from '../containers/home';
import Projects from '../containers/projects';
import About from '../containers/about';

export class Main extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the Main props', props);
		this.state = {
			exp: [],
			edu: [],
			projects: []
		};
	}
	fetchData = async (url, type) => {
		try {
			switch(type) {
				case 'edu':
					return await axios.get(url)
					.then(data => {
						this.setState((state, props) => {
							return Object.assign({}, state, {
								edu: data
							})
						});
					})
					.catch(err => {
						console.log('error', err)
					});
				case 'exp':
					return await axios.get(url)
					.then(data => {
						this.setState((state, props) => {
							return Object.assign({}, state, {
								exp: data
							})
						});
					})
					.catch(err => {
						console.log('error', err)
					});
				default:
					return await axios.get(url)
					.then(data => {
						console.log('data', data)
						this.setState((state, props) => {
							return Object.assign({}, state, {
								exp: data
							})
						});
					})
					.catch(err => {
						console.log('error', err)
					});
			}
		} catch {
			console.log("error on data grab")
		}
	}
	componentDidMount() {
		this.fetchData('https://www.jim-tisdale.com/api/projects', 'prj');
		this.fetchData('https://www.jim-tisdale.com/api/education', 'edu');
		this.fetchData('https://www.jim-tisdale.com/api/experience', 'pexp');
	}
	render () {
		return (
			<div>
				<Switch>
          <Route path="/about">
            <About workExperience={this.state.exp} 
            	eductation={this.state.edu}/>
          </Route>
          <Route path="/projects">
            <Projects projects={this.state.projects}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
			</div>
		)
	}
}


export default connect()(Main);
