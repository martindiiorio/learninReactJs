import React from 'react';

export default class UserNew extends React.Component {

    constructor(props){
        super(props);

        if (props.id){
            this.state = props.user;
        } else {
            this.state = {
                name: '',
                lastname: '',
                dni: '',
                email: '',
                sex:''
            };
        }


        this.genders = ['', 'Hombre', 'Mujer', 'Sin Definir']
    }

    componentWillMount(){
        fetch('http://jsonplaceholder.typicode.com/users' + this.props.id)
            .then(response => response.json())
            .then(users => {
                this.setState({users: users})
            })
    }

    save = () => {
        console.log('crear usuario');
        console.log(this.state);
    };

    handleChange = (event, field) => {
        let o = {};
        o[field] = event.target.value; // o.name o['name'] field='name' o[field];
        this.setState(o); // { name: 'asd'}
        this.isValid();
    };

    render(){
        console.log(this.state);
        return (
            <div>
                <label>Nombre</label>
                <input onChange={(e) => this.handleChange(e,'name')} value={this.state.name} type="text"/>
                { this.state.nombreValid ? <label>Nombre corto!</label> : ''}
                <br/>
                <label>Email</label>
                <input onChange={(e) => this.handleChange(e,'mail')} value={this.state.mail} type="text"/>
                <br/>
                <button onClick={this.save}>Creame!</button>
            </div>
        )
    }

}