import React, {useEffect, useState} from 'react';
import NavBar from '../components/Nav/Nav';
import Head from '../components/Head/Head';
import Search from '../components/Search/Search';
import Results from '../components/Results/Results';
import {Container} from 'react-bootstrap';
import API from '../utils/API';

import '../App.css';


const Saved = () => {

    let [books, setBooks] = useState([])

    useEffect(() => {
        API.getBooks()
        .then((res)=>{
            setBooks(res.data)
            console.log(books)
        })
        .catch(err => console.log(err));
    })

    return ( 

    
        <div className="App">
            <NavBar />
            <Container fluid>
              <Head />
             
             <div>
                 <h2>Saved Books</h2>
             </div>
              
            </Container>
          </div>
     );
}
 
export default Saved;