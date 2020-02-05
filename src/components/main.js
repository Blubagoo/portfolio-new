import React from 'react';
import Home from '../containers/home';
import Projects from '../containers/projects';
import About from '../containers/about';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export class Main extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the Main props', props);
	}
	render () {
		return (
			<div>
				<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	view: state.view
});

export default connect(mapStateToProps)(Main);
