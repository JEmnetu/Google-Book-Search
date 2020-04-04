import React, {Component} from 'react';
import NavBar from '../components/Nav/Nav';
import Head from '../components/Head/Head';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import {Container} from 'react-bootstrap';

import '../App.css';

class Home extends Component {
    state = {  }
    render() { 
        return (
          <div className="App">
            <NavBar />
            <Container fluid>
              <Head />
              <Search />
              <Results />
            </Container>
          </div>
        );
    }
}
 
export default Home;