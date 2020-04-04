import React, { Component } from 'react';
import { Jumbotron} from 'react-bootstrap';
import './Head.css'

class Main extends Component {
    state = {  }
    render() { 
        return ( 
        
            <Jumbotron>
                <h1 className="heading">React Google Book Search</h1>
                <h4 className="heading">Search for and Save books of Interest</h4>
            </Jumbotron>
         
         );
    }
}
 
export default Main;