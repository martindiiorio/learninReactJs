import React from 'react';
import { render } from 'react-dom';
import Leyenda from './components/leyenda';


class App extends React.Component {

    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <Leyenda text={"Hola"} numero={1} id={1}/>
                <br/>
                <Leyenda text={"Chau"} numero={2}/>
            </div>
        )
    }

}

render(<App/>,document.getElementById('example'));