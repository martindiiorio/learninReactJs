import React from 'react';

export default class LifeCicle extends React.Component {

	constructor(props) {
		super(props); // llama al constructor de React Component
		
		this.state = {
			showText: true
		};

		this.interval = setInterval(() => { // arrow function
			console.log('Cambio de estado')
			this.setState({
				showText: !this.state.showText
			})
		}, 2000);
	}

	componentWillMount() {
		console.log('Se va a montar el componente')
	}

	
	render() {
		if (this.state.showText) {
		return <div>Hola Ciclo de vida</div>
			
		} else {
			return null;
		}
	}

	componentDidMount() {
        console.log('Ya lo tengo en pantalla');        
    }

    //----------------------------------------------------------//

    componentWillReceiveProps() {
        console.log('Toma nuevas propiedades');
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {
        console.log('Lo voy actualizar');
    }

    componentDidUpdate() {
        console.log('Ya me actualicé');
    }

    componentWillUnmount() {
    	console.log('Voy a sacar el componente');
    	clearInterval(this.interval);
    }

}