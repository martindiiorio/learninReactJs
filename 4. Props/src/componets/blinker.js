import React from 'react';

export default class Blinker extends React.Component {

	constructor () { // no le pasamos props
		super();
	
		this.state = {
			showText: true
		};

		setInterval(() => { // arrow function
			this.setState({
				showText: !this.state.showText
			})
		}, 1500);
	}

	render() {

		let display = this.state.showText ? 'Muestro........' : '';

		if (this.state.showText) {
			return (
				<div>{display}</div>
			)
			
		} else {
			return null;
		}

	}

}