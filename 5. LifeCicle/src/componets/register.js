import React from 'react';

export default class Register extends React.Component {
	constructor(props) {
		super(props);


		if (props.user) {

			this.state = props.user;

		} else {

			this.state = {
				name: '',
				lastname: '',
				dni: '',
				email: '',
				sex: ''
			}

		}

		this.genders = ["Hombre", "Mujer", "Indefinido"];	
	}


	handleChange = (event, field) => {
		console.log(field + ':');
		console.log(event.target.value);

		let o = {};
		o[field] = event.target.value;
		this.setState(o)
	}
	save = () => {
		console.log('Crear Usuario');
		console.log(this.state);
	}

	render() {
		return(
			<div>
				<div className="container">
				<h2>Registro</h2>
					<div className="form-group">			
						<label>Nombre</label>
						<input className="form-control" onChange={(e) => this.handleChange(e, 'name')} value={this.state.name}  type="test"/>
						<br/>
						<label>Apellido</label>
						<input className="form-control" onChange={(e) => this.handleChange(e, 'lastname')} value={this.state.lastname}  type="test"/>
						<br/>
						<label>DNI</label>
						<input className="form-control" onChange={(e) => this.handleChange(e, 'dni')} value={this.state.dni}  type="test"/>
						<br/>
						<label>Email</label>
						<input className="form-control" onChange={(e) => this.handleChange(e, 'email')} value={this.state.email} type="test"/>
						<br/>
						<select className="form-control" onChange={(e) => this.handleChange(e, 'sex')} value={this.state.sex}>
							{
								this.genders.map( (g, index) => {
									return <option key={index} value={g}>{g}</option>
								})
							}
						</select>
						<br/>
						<button className="form-control" onClick={this.save}>Registrame</button>
					</div>
				</div>
			</div>
		)
	};
}