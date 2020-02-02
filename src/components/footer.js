import React from 'react';
import './styles/footer.css';

const photo = require('./images/headshot.jpg');

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the Footer props', props);
	}
	render () {
		return (
			<div className='footer'>
				<div className='footer-wrapper'>
					<div className='sect'>
						<img src={photo} alt='Jim Tisdale' />
						<div className='info-wrapper'>
							<h4>Jim Tisdale</h4>
							<p>Dothan, AL</p>
							<p>(334)500-0066</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}