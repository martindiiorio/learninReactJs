import React from 'react';
import { Link } from 'react-router-dom';
 

export default class User extends React.Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <h1>{this.props.id}</h1>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.username}</p>
                <hr/>
                <Link to={"users/edit/" + this.props.id}/>Editar<Link/>
            </div>
        )
    }

}