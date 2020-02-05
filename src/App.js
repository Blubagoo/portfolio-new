import React from 'react';
import {
	BrowserRouter as Router,
} from 'react-router-dom';

import Container from './components/container';

export default () => {
  console.log('rendering container');
  return (
  	<Router>
  		<Container />
  	</Router>
  )
}
