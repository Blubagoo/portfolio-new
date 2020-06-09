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
					let edu =  await axios.get(url);
					console.log("after axios get", edu)
					return this.setState((state, props) => {
						return Object.assign({}, state, {
							edu
						})
					});
				case 'exp':
					let exp =  await axios.get(url);
					console.log("after axios get", edu)
					return this.setState((state, props) => {
						return Object.assign({}, state, {
							exp
						})
					});
				default:
					let prj =  await axios.get(url);
					console.log("after axios get", edu)
					return this.setState((state, props) => {
						return Object.assign({}, state, {
							projectsj: prj
						})
					});
			}
		} catch {
			console.log("error on data grab")
		}
	}
	componentDidMount() {
		this.fetchData('https://jim-server.herokuapp.com/api/projects', 'prj');
		this.fetchData('https://jim-server.herokuapp.com/api/education', 'edu');
		this.fetchData('https://jim-server.herokuapp.com/api/experience', 'exp');
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
