import React from 'react';
import User from './user';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class UsersList extends React.Component {

    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({users: users})
            })
    }

    render(){
        return (
            <div>
            <Link to="">Crear nuevo Usuario</Link>"
                {

                    this.state.users.map( (u, index) => {
                        return (
                            <User key={index} {...u} />
                        )
                    })
                }
            </div>
        )
    }
}
