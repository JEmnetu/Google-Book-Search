import React, { Component } from 'react';
import API from '../../utils/API';

class Search extends Component {
    state = { results:[] };
    componentDidMount(){
        API.getBooks()
        .then((data)=>{
            console.log(data);
        })
    }
    
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