import React from 'react';

import './styles/repeater.css';

export default class Repeater extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the repeater props', props)
	}
	listBullets(array) {
		console.log('arrar on bullets', array)
		let bullets = array.map((item,index) => {
			console.log('item', item);
			return <li key={index}>{item}</li>
		});
		return bullets;
	}
	render() {
		let map = this.props.list.map((each,index) => {
			console.log('each', each)
			let bullets;
			if(this.props.config.title === 'Experience') {
				bullets = this.listBullets(each.bulletPoints);
				console.log('bullets', bullets)

			}
			return (
				<div className='listing' key={index} id={`${this.props.config.type}-${index}`}>
					<div className='name-wrapper'>
						<h3>{each.company}</h3>
						<em>({each.date[0].start} - {each.date[0].end})</em>
					</div>
					<p>{each.info}</p>
					<ul>
						{bullets}
					</ul>
				</div>
			)
		})
		return (
			<div className={`repeater ${this.props.type}`}>
				<div className='title'>
					<h2>{this.props.config.title}</h2>
				</div>
				<div className='description'>
					{map}
				</div>
			</div>
		)
	}
}