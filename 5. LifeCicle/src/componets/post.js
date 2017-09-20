import React from 'react';

export default class Post extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			counter: this.props.intitialCounter,
			text: 'escriba aqui'
		}

	}

	plusOne = () => {
		this.setState({ counter: this.state.counter +1 })

		// deberíamos actualizar en el servidor el dato
	}

	handleInput = (event) => {

		console.log(event.target.value)
		this.setState({ text: event.target.value })

	};

	render() {
		return (

			<div>
				<h1> {this.props.title} </h1>

				<p> {this.props.body}</p>

				<button onClick={this.plusOne}> +1 </button>

				Cantidad de +: {this.state.counter}

				<button onClick={ ()=> this.props.deleteFn(this.props.id)} > Borrame </button>

				<input onChange={ this.handleInput } value={this.state.text}/>

			</div>

		)


	}

}