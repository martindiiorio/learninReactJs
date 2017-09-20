import React from 'react';
import PropTypes from 'prop-types';

export default class Leyenda extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <label>{this.props.text}..... {this.props.numero}</label>
    }
}

Leyenda.propTypes = {
	id: PropTypes.number.isRequierd,
	text: PropTypes.string,
	numero: PropTypes.number
}