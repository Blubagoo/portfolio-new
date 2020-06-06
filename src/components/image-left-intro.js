import React from 'react';
import './styles/image-left-intro.css';


const layerOne = require('./images/kipo-image-mandu.png');
const layerTwo = require('./images/kipo-image-kipo.png');
const layerThree = require('./images/kipo-image-wolf.png');
const layerFour = require('./images/kipo-image-benson.png');
const layerFive = require('./images/kipo-image-bg.png');
const layerSix = require('./images/kipo-image-jamack.png');
const layerSeven = require('./images/kipo-image-yumyan.png');
const layerEight = require('./images/kipo-image-timbercat.png');
const layerNine = require('./images/kipo-image-harris.png');
const layerTen = require('./images/kipo-image-big-bird.png');
const layerBG = require('./images/kipo-image-bg.png');


export default class ImageleftIntro extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the image left intro props', props);
	}
	componentDidMount () {

	}
	render() {
		return (
			<div className='home-top'>

				<div className='kipo-sect'>
					<div className='img-wrapper'>
						<img src={layerOne} alt='kipo age of the wonderbeasts fan art' style={{zIndex: '10', marginLeft: '200px'}} />
						<img src={layerTwo} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '9', marginLeft: '150px'}} />
						<img src={layerThree} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '7', marginLeft: '200px'}} />
						<img src={layerFour} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '10', marginLeft: '50px'}} />
						<img src={layerFive} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '2', marginLeft: '60px'}} />
						<img src={layerSix} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '2', marginLeft: '70px'}} />
						<img src={layerSeven} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '3', marginLeft: '70px'}} />
						<img src={layerEight} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '4', marginLeft: '60px'}} />
						<img src={layerNine} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '2', marginLeft: '60px'}} />
						<img src={layerTen} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '1', marginLeft: '60px'}} />
						<img src={layerBG} alt='kipo age of the wonderbeasts fan art'  style={{zIndex: '0'}} />
						<div className='text-area'>
							<p>This slider was custom built. Feel free to check out the code <a target='_blank' href="https://github.com/Blubagoo/portfolio-new/blob/master/src/components/image-left-intro.js">here</a></p>
						</div>
					</div>
					<div className='info-wrapper'>
						<h1>Jim Tisdale</h1>
						<h2>Design. Develop. Have Fun.</h2>
						<p>I'm a developer who can manage projects from start to finish, while picking up on bottlenecks
						 such as graphic updates and simple content additions. I love to jump in and learn new things
						 and this allows me to round out my skillset with valuable skills like photoshop, nDesign, 
						 SEO, Sys Admin duties, and Excel.</p>
					</div>
				</div>
			</div>
		)
	}
}
