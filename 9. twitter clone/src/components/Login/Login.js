import React from 'react';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	handleName = (event) => {
		console.log(event.target.value);
		this.setState( { username: event.target.value } )
	} 

	handlePassword = (event) => {
		console.log(event.target.value);
		this.setState( { password: event.target.value } )
	} 

	login = () => {
		console.log('Login!!!!!!!!!!!')
	}

	render() {
		return (
			<div>

				<br/>
				Formulario Login
				<br/><br/>
				<label>UserName </label>
				<input onChange={this.handleName}/>
				<br/><br/>
				<label>Password </label>
				<input type="password" onChange={this.handlePassword}/>
				<br/><br/>
				<button onClick={this.login}>Login</button>

			</div>
		)
	}
}