import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Search extends Component {
    state = { results:[] }
    render() { 
        return ( 
        
        <div id="search-div">
            <h1>Search</h1>

            <form id="search-form">
            <label>Book:</label>
            <input type="text" defaultValue="Search for a book"></input>
            
            <button id="search-button">Search</button>
            </form>
            
            
        </div> );
    }
}
 
export default Search;