import React from 'react';

import './styles/repeater.css';

export default class Repeater extends React.Component {
	constructor(props) {
		super(props);
		console.log('this is the repeater props', props);
		this.state = {
			list: this.props.list,
			title: this.props.config.title,
			type: this.props.config.style
		}
	}
	listBullets(array) {
		console.log('arrar on bullets', array)
		let bullets = array.map(item => {
			console.log('item', item);
			return <li>{item}</li>
		});
		return bullets;
	}
	render() {
		let map = this.state.list.map((each,index) => {
			console.log('each', each)
			let bullets;
			if(this.state.title === 'Experience') {
				bullets = this.listBullets(each.bulletPoints);
				console.log('bullets', bullets)

			}
			return (
				<div className='listing' key={index} id={`${this.state.type}-${index}`}>
					<div className='name-wrapper'>
						<h3>{each.company}</h3>
						<em>({each.date.start} - {each.date.end})</em>
					</div>
					<p>{each.info}</p>
					<ul>
						{bullets}
					</ul>
				</div>
			)
		})
		return (
			<div className={`repeater ${this.state.type}`}>
				<div className='title'>
					<h2>{this.state.title}</h2>
				</div>
				<div className='description'>
					{map}
				</div>
			</div>
		)
	}
}