import React, { Component } from 'react';
import Results from '../Results/Results';
import API from '../../utils/API';

class Search extends Component {
    state = { results:[] };

  
    render() { 

        let searchBooks = (event)=>{
            // API.queryBooks()
            event.preventDefault();
            console.log(event.target[0].value);
            API.queryBooks(event.target[0].value)
            .then((data)=>{
                
                this.setState({
                    results:data.data.items
                })
              
            })
        }
        // componentDidMount(){
            
        // }
        if(this.state.results.length === 0){
            return ( 
       
        
                <div id="search-div">
                    <h1>Search</h1>
        
                    <form id="search-form" onSubmit={searchBooks}>
                    <label>Book:</label>
                    <input type="text"></input>
                    
                    <button id="search-button" type="submit">Search</button>
                    </form>
                    
                    
                </div> );  
        }

        else{
            return ( 
       
        
                <div id="search-div">
                    <h1>Search</h1>
        
                    <form id="search-form" onSubmit={searchBooks}>
                    <label>Book:</label>
                    <input type="text"></input>
                    
                    <button id="search-button" type="submit">Search</button>
                    </form>

                    <Results books={this.state.results} />
                    
                    
                </div> );
        }
        
    }
}
 
export default Search;