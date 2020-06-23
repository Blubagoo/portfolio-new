import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.css';

const photo = require('./images/headshot.jpg');
const timbercats = require('./images/timbercats-singing-trans.png')

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
							<a href="https://goo.gl/maps/1AZHHKSdHK2d1o9Q8" target="_blank"><p>Dothan, AL</p></a>
							<a href="tel:3342583741"><p>(334)258-3741</p></a>
						</div>
					</div>
					<div className="sect-middle">
						<div className='top-menu'>
							<Link to='/' className='menu-item'>
								<p>Home</p>
							</Link>
							<Link to='/projects' className='menu-item'>
								<p>Projects</p>
							</Link>
							<Link to='/about' className='menu-item'>
								<p>Bio</p>
							</Link>
						</div>
						<div className='social-icons'>
							<a href='https://github.com/Blubagoo' rel="noopener noreferrer" target='_blank' className='icon github'>
								<i className="fab fa-github"></i>
							</a>
							<a href='https://oneopinion.me/wp-content/uploads/2020/06/Jim-Tisdale-1.pdf' className='icon resume' target="_blank">
								<i className="fas fa-file-download"></i>
							</a> 
							<a href='https://www.linkedin.com/in/jim-tisdale/' rel="noopener noreferrer" target='_blank' className='icon linkedin'>
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a href='https://soundcloud.com/blubagoo' rel="noopener noreferrer" target='_blank' className='icon linkedin'>
								<i className="fab fa-soundcloud"></i>
							</a>
						</div>
					</div>
					<div className='sect-right'>
						<img src={timbercats} alt='Jim Tisdale' />
					</div>
				</div>
			</div>
		)
	}
}