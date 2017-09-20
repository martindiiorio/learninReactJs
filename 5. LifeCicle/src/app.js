import React from 'react';
import { render } from 'react-dom';
// import LeyendaSinEstado from './componets/leyendaSinEstado';
// import Leyenda from './componets/leyenda';
// import Blinker from './componets/blinker';
// import PostList from './componets/postlist';
// import { posts, users } from '../data/data';
// import LifeCicle from './componets/lifeCicle';

import Register from './componets/register';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            sacalo: false
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({sacalo: true})
        }, 10000) 
    }

    render(){

        let data = {
            text: 'Hola',
            numero: 1,
            id: 1
        };

        return (
            <div>

                {// <LeyendaSinEstado text={'hola'} numero={2}/>
                // <br/>
                // <Leyenda text={'Chau'} numero={2} />
                // { this.state.sacalo ? null : <LifeCicle />}
                }
                <Register />
                <br />
                {/*<Register user = {
                    {
                        name:'Pepito', 
                        lastname:'rodriguez',
                        dni: '23234234',
                        email: 'asdas@asda.com',
                        sex: 'Hombre'
                    }
                }/>*/}
            </div>

        )
    }

}

render(<App/>,document.getElementById('example'));